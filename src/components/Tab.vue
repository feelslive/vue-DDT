<template>
	<div id="tab">
		<div class="foot-nav">
	        <ul class="foot-nav-ul">
	        	<router-link v-for="(item,index) in navData" :to=item.path key='index' tag="li" 
                > <i :style="{backgroundImage: 'url(' + item.icon + ')'}"></i>
                {{item.text}}
                </router-link>
	        </ul>
    	</div>
	</div>
</template>
<script>

export default {
  name: 'tab',
  data() {
  	return {
        navData: [
          {
            text: '首页',
            path: "/",
            icon: "../../static/images/nav01.png"
          }, {
            text: '项目',
            path: "/Project",
            icon: "../../static/images/nav02.png"
          }, {
            text: '我的',
            path: "/Mycenter",
            icon: "../../static/images/nav03.png"
          }, {
            text: '更多',
            path: 'More',
            icon: "../../static/images/nav04.png"
          }
        ]
	}
  }
}
</script>
<style lang='less'>
#tab {

    .foot-nav {
    height: 2.5rem;
    width: 100%;
    max-width: 720px;
    position: fixed;
    bottom: 0;
    font-size: .7rem;
    background-color: #22354b;
        .foot-nav-ul {
            display: flex;
            width: 100%;
            height: 100%;
            .router-link-exact-active{
                background-color:#07112e;
            }
            li {
                flex: 1;
                /*float: left;*/
                color: #ccc;
                line-height:3.8rem;
                text-align:center;
                position: relative;
                i {
                    width: 1.5rem;
                    height: 1.5rem;
                    position: absolute;
                    top: 2px;
                    left: 50%;
                    margin-left: -15px;
                    display: inline-block;
                    background-size: cover;
                    background-repeat:no-repeat;
}
            }
        }
    }
}
</style>