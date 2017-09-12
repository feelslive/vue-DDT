<template>
	<div class="heder">
		<router-link to='/'><i class="logo-i">L</i></router-link>
		<h1>{{tit}}</h1>
		<router-link to='/enroll'><i class="h-i"></i></router-link>
	</div>
</template>

<script>
	export default {
	  name: 'heder',
	  data() {
	  	return {
	  		tit:" "
	  	}
	  }
	}
</script>

<style lang='less'>
.heder {
	height: 50px;
	width: 100%;
	max-width: 720px;
	background-color: #ccc;
	color: #fff;
	line-height: 50px;
	text-align: center;
	font-size:18px;
	position: fixed;
	top:0;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	justify-content: space-between;
	z-index:1000;
	a {
		display: inline-block;
	}
}
.logo-i {
	display: inline-block;
	width: 30px;
	height: 30px;
	margin-left: 20px;
	color:#000;
	line-height: 30px;
	border-radius: 50%;
	background-color: #fff;
	
}
.h-i {
	display: inline-block;
	width: 30px;
	height: 30px;
	margin:0 20px 0 0;
	vertical-align: middle;
	background:url("../../static/images/nav03s.png");
	background-size:cover;
}
	
</style>