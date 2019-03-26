<template>
  <div id="app">
    <component :is="currentComponent" @callComponent="changeComponent"></component>
  </div>
</template>

<script>
import Informations from './components/Informations.vue'
import Inquiries from './components/Inquiries.vue'

export default {
  name: 'app',
  components: {
    Informations, 
    Inquiries, 
  }, 
  data: function () {
    return {
      currentComponent: 'Informations', 
    } 
  }, 
  methods: {
    changeComponent: function (componentName) {
      this.currentComponent = componentName
    }
  }
}
</script>

<style>
html {
  font-size: 62.5%;
  font-size: calc(62.5% + 0.5vw);
}
body {
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100vw;
  height: 100vh;
}
section {
  width: 100vw;
  height: 100vh;
}
.wh-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-centered {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
.frame {
  width: 38vw;
  height: 62vh;
  border: 0.2rem solid lightgrey;
  border-radius: 0.8rem;
  padding: 1rem;
}
</style>
