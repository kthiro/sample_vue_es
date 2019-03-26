<template>
  <div id="app">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Informations from './components/Informations.vue'

export default {
  name: 'app',
  components: {
    Informations, 
  }, 
  data: function () {
    return {
      currentComponent: 'Informations', 
    } 
  }, 
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
.frame {
  width: 38vw;
  height: 62vh;
  border: 0.2rem solid lightgrey;
  border-radius: 0.8rem;
  padding: 1rem;
}
</style>
