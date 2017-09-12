<template>
  <div id="project" class="headerBox">
    <div class="nav">
        <div v-on:click='toggle()'class='nav-tit' :class="{ active: isShow }"><h3>项目类型 <i class="el-icon-arrow-down"></i></h3></div>
        <el-collapse-transition>
            <div class="nav-con" v-show='isShow'>
                <ul>
                    <li v-for='projectTit in projectTits'><a href="javascript:void(0)">{{projectTit}}</a></li>
                </ul>
            </div>
        </el-collapse-transition>
        <div v-on:click='toggle1()' class='nav-tit' :class="{ active: isShow1 }"><h3>项目周期 <i class="el-icon-arrow-down"></i></h3></div>
        <el-collapse-transition>
            <div class="nav-con" v-show='isShow1'>
                <ul>
                    <li v-for='projectTime in projectTimes'><a href="javascript:void(0)">{{projectTime}}</a></li>
                </ul>
            </div>
        </el-collapse-transition>
        <div v-on:click='toggle2()' class='nav-tit' :class="{ active: isShow2 }"><h3>项目收益 <i class="el-icon-arrow-down"></i></h3></div>
        <el-collapse-transition>
            <div class="nav-con" v-show='isShow2'>
                <ul>
                    <li v-for='projectNum in projectNums'><a href="javascript:void(0)">{{projectNum}}</a></li>
                </ul>
            </div>
        </el-collapse-transition>
        </div>

    <Project></Project>
   <Tab></Tab>
  </div>
</template>

<script>
import Tab from './Tab.vue'
import Project from './Project-list.vue'
export default {
  name: 'project',
  data(){
    return{
        projectTits:['全部','新手专享','抵押标','质押标','担保标','信用标'],
        projectTimes:['全部','60天以下','60-180天','180-360天','360天以上'],
        projectNums:['全部','10%以下','10%-12%','12%以上'],
        isShow:false,
        isShow1:false,
        isShow2:false
    }
  },
  methods:{
    toggle() {
        this.isShow = !this.isShow;
        this.isShow1 = false;
        this.isShow2 = false;
    },
     toggle1() {
        this.isShow1 = !this.isShow1;
        this.isShow = false;
        this.isShow2 = false;
    },
     toggle2() {
        this.isShow2 = !this.isShow2;
        this.isShow = false;
        this.isShow1 = false;
    }
  },
  components: {
    Tab,
    Project
  }
}
</script>

<style lang='less'>
.nav{
    width: 100%;
    height: 2rem;
    display: flex;
    position: fixed;
    font-size: .8rem;
    top:2.5rem;
    z-index:99;
    .nav-tit {
        flex: 1;
        text-align: center;
        line-height: 2rem;
        background-color: #fff;
        i {
            font-size: .7rem;
        }
    }
    .active {
        color: red;
    }
    .nav-con {
        width:100%;
        position: absolute;
        top:2rem;
        left: 0;
        padding-bottom: .5rem;
         background-color: #fff;
         border-bottom: 1px solid #ccc;
        ul {
            
            li {
            float: left;
            width: 30%;
            text-align: center;
            border-radius: .25rem;
            padding:.25rem;
            margin: 5px 0 5px 2.5%;
            border: 1px solid #ededed;
           
            }
        }
    }
}


 

</style>