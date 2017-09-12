<template>
  <div id="project-list" class="project-list">
    <ul >
        <router-link to='/:id' v-for="(list,index) in lists" tag="li" key='index' v-loading="loading" element-loading-text="拼命加载中" v-if=""> 
            <div class="list-tit">
                <i>X</i>
                <h3>{{list.tit}}</h3>
                <div class="proType"><span>{{list.news}}</span></div>
            </div>
            <div class="list-text">
                <div class="list-txt-num">
                    <h1>{{list.num}}</h1>
                    <span>年化收益率</span>
                </div>
                <div class="list-txt-time">
                    <p>投资周期：{{list.time}}</p>
                    <p>融资金额：{{list.money}}</p>
                    <el-progress :percentage='list.Speed' ></el-progress>
                </div>
            </div>
        </router-link>
        <div class="next" @click='nexsst()'>
            点击加载更多
        </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'project-list',
  data(){
    return{
        lists:[
            {id:1,icon:'',tit:'机械厂老板车辆板车辆板车0160921',num:'10%',time:'365',money:'800000',Speed:70,news:"新手专享"},
            {id:2,icon:'',tit:'钢制老板车辆质押借款20160921',num:'11%',time:'455',money:'800000',Speed:20,news:''},
            {id:2,icon:'',tit:'钢制老板车辆质押借款20160921',num:'11%',time:'455',money:'800000',Speed:20},
            {id:2,icon:'',tit:'钢制老板车辆质押借款20160921',num:'11%',time:'455',money:'800000',Speed:20,news:"新手专享"},
            {id:2,icon:'',tit:'钢制老板车辆质押借款20160921',num:'11%',time:'455',money:'800000',Speed:20},
            {id:3,icon:'',tit:'上海市老板车辆质押借款20160921',num:'5%',time:'35',money:'10000',Speed:100},
            {id:1,icon:'',tit:'机械厂老板车辆板车辆板车0160921',num:'10%',time:'365',money:'800000',Speed:70},
            {id:2,icon:'',tit:'钢制老板车辆质押借款20160921',num:'11%',time:'455',money:'800000',Speed:20},
            {id:3,icon:'',tit:'上海市老板车辆质押借款20160921',num:'5%',time:'35',money:'10000',Speed:100}
        ],
        loading: true,
    }
  },
  created(){
    setTimeout(() =>{
        this.loading = false;
        }, 2000)
  },
  methods:{
    nexsst(){
        this.loading = true;
        setTimeout(() =>{
            this.loading = false;
         }, 2000)
    }
  }
}
</script>

<style lang='less'>
.project-list {
    padding: 1.5rem 0 2.5rem 0;
    ul {
        li {
            padding:0 1rem;
            margin:.5rem 0;
            background-color: #fff;
            .list-tit {
                height:2.2rem;
                width:100%;
                font-size: .9rem;
                line-height: 2rem;
                overflow: hidden;
                color: #000;
                 position: relative;
                border-bottom: 1px solid #ddd;
                .proType {
                    position: absolute;
                    top: -13px;
                    right: 0px;
                    width: 60px;
                    height: 60px;
                    text-align: center;
                    span {
                        position: relative;
                        top: 16px;
                        left: 11px;
                        display: block;
                        font-size: 12px;
                        color: #fe2749;
                        transform: rotate(45deg);
                    }
                }
                h3{
                    text-indent: .5rem;
                }
                i{
                    float: left;
                }
            }
            .list-text {
                display: flex;
                padding:.5rem 0;
                overflow: hidden;
                
                .list-txt-num {
                    flex:1;
                    text-align: center;
                    h1 {
                        font-size: 1.75rem;
                        color:#fe2749;
                    }
                    span {
                        font-size: .7rem;
                    }
                }
                .list-txt-time {
                    flex:2;
                    p {
                        color: #999;
                        margin: .2rem 0;
                    }
                    .el-progress-bar__inner {
                        background-color:#fe2749;
                    }
                }
            }
        }
        .next {
            width:70%;
            text-align: center;
            margin: 1rem auto;  
            border-radius: .5rem;
            padding:.3rem 0;
            border: 1px solid #fe2749;
        }
    }
}

</style>