<script>
import {ExaminersService} from '@/shared/services/examiners/examiners.service.js'
import { MentalStateExams } from '@/nursing/service/mental-state-exams.js'
import { Examiner } from '@/nursing/models/examiner.entity.js'

export default {
  name: 'exam-results-cards',
  data() {
    return {
      examinerData: null,
      examResultsData: null,
      examsResults: [],
      examiners: [],
      examinerService: new ExaminersService(),
      examResultService: new MentalStateExams()
    }
  },
  methods: {
    async getExaminers() {
      await this.examinerService.getAll().then((response) => {
        response.data.forEach((examiner) => {
          const { id, firstName, lastName, nationalProviderIdentifier } = examiner;
          this.examinerData = new Examiner(id, firstName, lastName, nationalProviderIdentifier);
          this.examiners.push(this.examinerData);
        });
      })
    },
    async getExamResults() {
      await this.examResultService.getAll().then((response) => {
        response.data.forEach((mentalStateExam) => {
          const { id, examinerId, orientationScore, registrationScore, attentionAndCalculationScore, recallScore, languageScore } = mentalStateExam;
          this.examResultsData = {
            id,
            examinerId,
            totalScore: Number(orientationScore) + Number(registrationScore) + Number(attentionAndCalculationScore) + Number(recallScore) + Number(languageScore)
          };
          this.examsResults.push(this.examResultsData);
        });
      })
    },
    async catchData(){
      await this.getExaminers();
      await this.getExamResults();
    }
  },
  created() {
    this.catchData();
  }
}
</script>

<template>
  <div v-for="(examiner,index) in examiners" :key="index" class="flex justify-content-center" aria-label="The cards container">
    <pv-card aria-label="The card content">
      <template #title>
        <h2>{{examiner.firstName + ' ' + examiner.lastName}}</h2>
        <h3>NPI: {{examiner.nationalProviderIdentifier}}</h3>
        <h4>Mental State Exam Performance</h4>
      </template>
      <template #content>
        <p>Current Assigned Mental State Exam Count: {{ examsResults.filter(exam => exam.examinerId === examiner.id).length }}</p>
        <p>Average Assigned Mental State Exam Total Score: {{ examsResults.filter(exam => exam.examinerId === examiner.id).reduce((a, b) => a + b.totalScore, 0) / examsResults.filter(exam => exam.examinerId === examiner.id).length }}</p>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.card-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
