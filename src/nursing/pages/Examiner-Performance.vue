<script>
import ExamResultsCards from './examiner-card.vue';

export default {
  name: 'the-results-page.component',
  components: { ExamResultsCards }
}
</script>

<template>
  <h1 class="text-center" aria-label="The mental state exams page title"> {{$t('mentalExams.title')}}</h1>
  <div class="flex flex-wrap gap-7 justify-content-center" aria-label="The exam-results-card container">
    <exam-results-cards/>
  </div>
</template>

<style scoped>
.flex-wrap {
  flex-wrap: wrap;
}
</style>
