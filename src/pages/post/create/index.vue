
<template>
	<div>
		<nav>
	      <ul flex="box:mean">
	        <li>
	        	<div v-on:click="$router.go(-1)">
	        		<i class="el-icon-arrow-left"></i>
	        	</div>
	        </li>
	        <li flex="main:center cross:center">
	           创建帖子
	        </li>
	        <li>
        
          </li>
	      </ul>
    </nav>

    <section class="v-content" >
      <form @submit.prevent="submit">
        <textarea name="" id=""  rows="5" v-model="form.content"></textarea>
        <v-upload title="图片上传" :picOption="picOption" getFile="getFiles" uploadingText="上传中..." domain="https://friday.linkers.cc/linkers" 
        uptokenUrl="http://stg-api.meikeapp.party/api/v1/images/uptoken"> 
        </v-upload>
        <button class="btn">{{ status ? '正在上传中' : '上传' }}</button>
      </form>
        
    </section>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import util from '../../.././util'
import axios from 'axios'
import is from 'is'
import qs from 'qs'
import VUpload from '../../.././components/VUpload'
   export default {
    components: {
      VUpload
    },
    data() {
      return {
        files:[],
        form:{
          content:'',
          images:''
        },
        status:false
      }
    },
    methods: {
      picOption(file ,index) {
        console.log(files)
      },
      getFiles (files) {
        console.log(files)
        this.files = files
      },
      submit() {
        if (this.status) return
        if(!this.form.content) return util.toast('请输入您的内容')
        this.status = true
        const postData = {
          user_id: this.$store.state.user.uid,
          auth_token: this.$store.state.user.tk,
          uid:this.$store.state.user.uid,
          content:this.form.content,
          images:this.$store.state.imgURL.imgKeys
        }
        var data = qs.stringify(postData)
        var that = this;
        
        axios.post('http://stg-api.meikeapp.party/api/v1/posts',data).then(function(response) {
          console.log(response)
          if(is.object(response.data.data)){
              util.toast('上传成功');
              that.$router.go(0)
          }
          else{
            that.status = false;
            util.toast('上传失败')
          }
          })
          .catch(function(error) {
            that.status = false
            console.log('this is'+error)
          })  
      }
    
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  section.v-content {
  	padding:1rem;
  }
  textarea {
    box-shadow: none !important;
    border: 0px solid #555;
    opacity: 0.4;
    border-radius: 0!important;
    font-size: 14px !important;
    
    resize: none;
    width: 100%;

  }
</style>