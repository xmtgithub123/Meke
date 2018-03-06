<template>
  <div>
    <nav>
      <ul flex="main:justify">
        <li>
           <div v-on:click="$router.go(-1)">
              <i class="el-icon-close"></i>
           </div>
        </li>
      </ul>
    </nav>
    <section class="v-content" flex="dir:top main:center cross:center">
        <h4>输入手机号及密码</h4>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2"  class="demo-ruleForm" >
          <el-form-item prop="mobile">
            <el-input v-model.number="ruleForm2.mobile" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code" class="verification-code-l">
            <el-input v-model.value="ruleForm2.code" placeholder="验证码"></el-input>
            <el-button type="text" @click="send" v-show="!computedTime">获取验证码</el-button>
            <el-button type="text" v-show="computedTime" style="color:#ccc;">已发送({{computedTime}}s)</el-button>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="密码、长度不小于6位"></el-input>
          </el-form-item>
          
          <el-button type="text" @click="verifycode" >测试</el-button>          
          <el-form-item>
            <el-button type="black" @click="submitForm('ruleForm2')">注册</el-button>
          </el-form-item>
        </el-form>
        <!-- <form class="form" @submit.prevent="submit">

            <div class="line">
                <input class="text" type="text" placeholder="手机号" v-model="mobile" >
                {{ mobile }}
                {{ errorMsg }}
            </div>
            <div class="line verification-code-l">
                <input class="text" type="text" placeholder="验证码" >
                <el-button type="text">立即获取</el-button>
                <span>59 秒</span>
            </div>
            <div class="line">
                <input class="text" type="text" placeholder="密码、长度不小于6位" v-model="pass">
                {{ pass }}
            </div>
            <div class="line">
                <button class="btn">注册</button>
            </div>
        </form>
        <br> -->
       
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import util from '../.././util'
import {mapActions,mapState} from 'vuex'
import VToast from '../.././components/VToast.vue'
import img from '../.././assets/pic_1.png'
import axios from 'axios'
import qs from 'qs'
// export default {
//   components:{
//     VToast
//   },
//   data () {
//     return {
//       toastshow:false, //默认不显示提示信息
//       toasttext:'', //提示信息内容
//       errorMsg:' ',
//       mobile:'',
//       pass:'',
//       registerUrl:'http://stg-api.meikeapp.party/api/v1/users/signup'
//     }
//   },
//   mounted() {
//     this.getRoute()
//   },
//   methods: {
//     submit(e) {
//       e.preventDefault();
//       const postData = {
//         mobile:this.mobile,
//         pass:this.pass
//       }
//       var data = qs.stringify(postData)
//       var that = this;
//       axios.post('http://stg-api.meikeapp.party/api/v1/users/signup',data).then(function(response) {
//         console.log(response)
//         that.errorMsg = response.data.error;
//       })
//       .catch(function(error) {
//         console.log('this is'+error)
//       })
//     },
//     getRoute() {
//       console.log(this.$route)
//     }
//   }
// }
  export default {
    data() {
      var checkMobile = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (/^[0-9]{11}$/.test(value) == false) {
              callback(new Error('请输入正确的手机格式'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (/^(\w){6,20}$/.test(value) ==false) {
            callback(new Error('输入6-20位任何字符，包括下划线'));
          }
          callback();
        }
      };
      var checkAuthCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          if (/^[0-9]{4}$/.test(value) == false) {
              callback(new Error('请输入4位数字的验证码'));
            } else {
              callback();
            }
        }
      };
      return {
        time:0,
        computedTime: 0, //倒数记时
        ruleForm2: {
          pass: '',
          code:'',
          mobile: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          mobile: [
            { validator: checkMobile, trigger: 'blur' }
          ],
          code:[
            { validator:checkAuthCode, trigger:'blur'}
          ]
        }
      };
    },
    computed: {
      text:function() {
        return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
      }
    },
    methods: {
      verifycode() {
        console.log("click ok")
        const codeData = {
          mobile:this.ruleForm2.mobile,
          code:this.ruleForm2.code
        }
        var that = this;
        var data = qs.stringify(codeData)
        axios.post('http://stg-api.meikeapp.party/api/v1/users/sms/verify',data).then(function(response){
          if(response.data.data) {
            util.toast('验证码正确')
          }
          else{
            util.toast('验证码错误')

          }
          
        })
        .catch(function(error) {
          console.log('send sms post' + error)
        })
      },
      send() {
        console.log('auth code click')
        this.computedTime= 30;
        this.timer = setInterval(()=> {
          this.computedTime --;
          if(this.computedTime ==0) {
            clearInterval(this.timer)
          }
        },1000)
        const postData = {
          mobile:this.ruleForm2.mobile,
          code:this.ruleForm2.authcode
        }
        var data = qs.stringify(postData)
        axios.post('http://stg-api.meikeapp.party/api/v1/users/sms/send',data).then(function(response){
          console.log(response)
          util.toast(response.data.data.msg)
        })
        .catch(function(error) {
          console.log('send sms post' + error)
        })

      },
      submitForm(formName) {
        const postData = {
          mobile:this.ruleForm2.mobile,
          pass:this.ruleForm2.pass,
          code:this.ruleForm2.code
        }
        console.log(postData.mobile)
        console.log(postData.pass)
        console.log(postData.code)
        var data = qs.stringify(postData)
        var that = this;

        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('http://stg-api.meikeapp.party/api/v1/users/sms/verify',data).then(function(response){
              if(response.data.data == true) {
                axios.post('http://stg-api.meikeapp.party/api/v1/users/signup',data).then(function(response) {
                  console.log(response)
                  util.toast(response.data.error)
                  util.toast('恭喜你！注册成功')  
                  that.$router.replace({ path: 'login' });
                })
                .catch(function(error) {
                  console.log('this is'+error)
                })
              }
              else{
                util.toast('验证码错误')
              }
              
            })
            .catch(function(error) {
              console.log('send sms post' + error)
            })            
          } else {
            util.toast('注册失败')
            return false;
          }         
        });  
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/config";
  @import "../../less/base";
  .verification-code-l {
    position:relative;
    input {
      padding-left:0;
    }
    button {
      position:absolute;
      right:0.5rem;
      bottom:0.2rem;
    }
    span {
      position:absolute;
      right: -2.1rem;
      bottom:0.2rem;
      color:@blue;
    }
  }

</style>
