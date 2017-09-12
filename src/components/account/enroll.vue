<template>
<!-- 注册 -->
	<div id="enroll">
		<h2>注册账户</h2>
		<el-form :label-position="labelPosition" label-width="70px" :rules="rules" ref="ruleForm" :model="formLabelAlign">
			<el-form-item label="账户名" prop="myName">
				<el-input type="text" v-model="formLabelAlign.myName" placeholder="设置账户名"></el-input>
			</el-form-item>
			
			<el-form-item label="设置密码" prop="pass">
			    <el-input type="password" v-model="formLabelAlign.pass" placeholder="请设置密码" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="towpass">
			    <el-input type="password" v-model="formLabelAlign.towpass" placeholder="请确认密码" auto-complete="off"></el-input>
			</el-form-item>
			</el-form-item>
			<el-form-item label="邀请码">
			    <el-input v-model="formLabelAlign.num" placeholder="没有可不写"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">确定注册</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  	</el-form-item>
		</el-form>
		<h2><router-link to='/login'>去登陆</router-link></h2>
	</div>
</template>
<script>
	export default {
	    data() {
	    	var checkName = (rule, value, callback) => {
		        if (!value) {
		          return callback(new Error('用户名不能为空'));
		        }else{
		        	callback();
		        }
		     };
	    	var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.formLabelAlign.towpass !== '') {
		            this.$refs.ruleForm.validateField('towpass');
		          }
		          callback();
		        }
		     };
		     var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.formLabelAlign.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		      };
		     return {
		        labelPosition: 'left',
		        formLabelAlign: {
		          myName: '',
		          pass: '',
		          towpass: '',
		          num: ''
		        },
		        rules: {
		          myName: [
		            { validator: checkName, trigger: 'blur' }
		          ],
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          towpass: [
		            { validator: validatePass2, trigger: 'blur' }
		          ]
		          
	      		}
		    }
	    },
	    methods: {
	    	submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		        	console.log(valid);
		          if (valid) {
		          	alert("提交成功")
		            let para = Object.assign({}, this.ruleForm2);
                        console.log(para);
                    this.$http.post('http://127.0.0.1/api/index.php', para)
                        .then((response) => {
                               console.log(response);
                        })
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
      		},
		     resetForm(formName) {
		        this.$refs[formName].resetFields();
		    }
		     
		}
	  
	}
</script>
<style lang='less'>
#enroll {
	font-size: .8rem;
	h2 {
		text-align: center;
		a {
			text-decoration:underline;
			color: #318dfd; 
		}
	}
	.el-form {
		padding-left: 2rem;
		margin-top: 2rem;
	}
	.el-form-item {
		margin: 1rem 0;
	}
	.el-input__inner {
		width:80%;
	}
}
	
</style>