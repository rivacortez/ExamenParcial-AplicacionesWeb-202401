<script>
import { MentalStateExams } from '@/nursing/service/mental-state-exams.js'

export default {
  name: 'the-home-page',
  data() {
    return {
      examCount: 0,
      highestScore: 0,
      lowestScore: 0,
      averageScore: 0,
      examResultService: new MentalStateExams()
    }
  },
  methods: {
    async getExamData() {
      await this.examResultService.getAll().then((response) => {
        const exams = response.data;
        this.examCount = exams.length;
        let totalScore = 0;
        exams.forEach((exam) => {
          const score = Number(exam.orientationScore) +
              Number(exam.registrationScore) +
              Number(exam.attentionAndCalculationScore) +
              Number(exam.recallScore) +
              Number(exam.languageScore);
          totalScore += score;
          if (score > this.highestScore) this.highestScore = score;
          if (score < this.lowestScore || this.lowestScore === 0) this.lowestScore = score;
        });
        this.averageScore = totalScore / this.examCount;
      })
    }
  },
  created() {
    this.getExamData();
  }
}
</script>
<template>




    <p class="styled-phrase"> {{$t('footer.phrase')}}</p>


  <div class="card-container">
    <pv-card aria-label="Mental State Exam Analytics">
      <template #title>
        <h2>Mental State Exam Analytics</h2>
        <h3>Score Analytics</h3>
      </template>
      <template #content>
        <p>Exam Count: {{ examCount }}</p>
        <p>Highest Score: {{ highestScore }}</p>
        <p>Lowest Score: {{ lowestScore }}</p>
        <p>Average Score: {{ averageScore }}</p>
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
.styled-phrase {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
  text-shadow: 2px 2px 4px #000000;
}
</style>
