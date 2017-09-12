<template>
  <div id="app">
  	<heder></heder>
  	<div class="cc"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import heder from './components/heder.vue'
export default {
  name: 'app',
  components: {
    heder
  }
}
</script>

<style>
.cc {
	padding-top: 50px;
}

</style>
