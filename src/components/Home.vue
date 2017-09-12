<template>
  <div class="home">
  
    <el-carousel :interval="5000000" arrow="always" height="200px">
      <el-carousel-item v-for="item in imgs" :key="item">
       <img :src=item alt="">
      </el-carousel-item>
    </el-carousel>
    <Tab></Tab>
  </div>
  
</template>
<script>
import Tab from './Tab.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome首页',
      imgs:["../../static/images/ban-01.jpg","../../static/images/ban-02.jpg","../../static/images/ban-03.jpg"]
    }
  },
  components: {
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item:nth-child(1n) {
    /*background: url(../../static/images/ban-01.jpg);*/
  }
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }
</style>
