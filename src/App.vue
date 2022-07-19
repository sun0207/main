<template>
  <div class="home">
    <HelloWorldVue></HelloWorldVue>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorldVue from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorldVue,
  }
}
</script>


