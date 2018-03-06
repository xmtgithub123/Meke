<template>
  <div>
    <nav>
      <ul flex="main:justify">
        <li>
           <div v-on:click="$router.go(-1)">
              <i class="el-icon-close"></i>
           </div>
        </li>
        <li>
           <router-link to="/forgetPassword" flex="man:center">找回密码</router-link>
        </li>
      </ul>
    </nav>
    <section class="v-content" flex="dir:top main:center cross:center">
        <img class="media-figure media-avatar-circle" src="./../../assets/avatar.png" alt="">
        <el-form :model="ruleLogin" :rules="rules" ref="ruleLogin"  class="demo-ruleForm" >
          <el-form-item prop="mobile">
            <el-input v-model.number="ruleLogin.mobile" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleLogin.pass" auto-complete="off" placeholder="密码、长度不小于6位"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="black" @click="submitForm('ruleLogin')">{{ status ? '正在登录中...' : '登录'}}</el-button>
          </el-form-item>
        </el-form>
        <br>
        <router-link to="/register" flex="man:center">新人注册</router-link>
    </section>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
import util from '../.././util'
import img from '../.././assets/pic_1.png'
import is from 'is'
import axios from 'axios'
import qs from 'qs'
import { USER_SIGNIN } from '../.././store/user'

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
            if (/^1[34578]\d{9}$/.test(value) == false) {
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
    
      return {
        ruleLogin: {
          pass: '',
          mobile: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          mobile: [
            { validator: checkMobile, trigger: 'blur' }
          ]
        },
        status:false
      };
    },
    methods: {     
      ...mapActions([USER_SIGNIN]),
      submitForm(formName) {
        if(this.status) return
        const postData = {
          mobile:this.ruleLogin.mobile,
          pass:this.ruleLogin.pass
        }
        console.log(postData.mobile)
        console.log(postData.pass)
        var data = qs.stringify(postData)
        var that = this;

        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.status = true
            axios.post('http://stg-api.meikeapp.party/api/v1/users/signin',data).then(function(response) {
              console.log(response)
              // console.log(is.object(response.data.data))
              if(is.object(response.data.data)) {
                util.toast('登录成功')
                that.USER_SIGNIN({
                  uid:response.data.data.uid,
                  tk:response.data.data.tk,
                  mobile:that.ruleLogin.mobile,
                  pass:that.ruleLogin.pass
                })
                that.$router.go(-1)
              }
              else {
                that.status = false
                util.toast('登录失败')
                
              }
            })
            .catch(function(error) {
              this.status = false
              console.log('this is'+error)
            })       
          } 
          else {
            util.toast('登录失败')
            this.status = false
          }         
        });  
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../less/base";
</style>
