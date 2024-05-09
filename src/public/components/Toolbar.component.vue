<script>
export default {
  name: 'toolbar-content',
  methods:{
    changeLanguage(lang){
      this.$i18n.locale = lang
    }
  }
}
</script>
<template>
  <div class="card" aria-label="The toolbar container">
    <pv-toolbar class="bg-blue p-5" aria-label="The toolbar content">
      <template #start>
        <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" width="100" alt="Toolbar image" aria-label="Branding logo"/>
      </template>
      <template #end>
        <router-link to="/home" class="route-text" aria-label="Go to home">
          <span class="text-white text-xl"> {{$t('toolbar.home')}}</span>
        </router-link>
        <router-link to="/nursing/mental-state-exams" class="route-text" aria-label="Go to mental state exams results">
          <span class=" ml-4 text-white text-xl"> {{$t('toolbar.examsSection')}}</span>

        </router-link>
        <div class="ml-4 flex gap-3">
          <pv-button class="custom-button" @click="changeLanguage('en')" aria-label="Translate english"> EN </pv-button>
          <pv-button class="custom-button" @click="changeLanguage('es')" aria-label="Translate spanish"> ES </pv-button>
        </div>
      </template>
    </pv-toolbar>
  </div>
</template>

<style scoped>
.bg-blue {
  background-color: #0000FF;
}

.route-text{
  text-decoration: none;
}

.route-text:hover{
  cursor: pointer;
}
.custom-button {
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #45a049;
  color: white;
}
</style>
