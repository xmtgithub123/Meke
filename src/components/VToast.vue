<template>
    <div v-show="toastshow" transition="toast" class="toast font-normal">
        {{toasttext}}
    </div>
</template>
<script>
export default{
    props:{
        //是否显示提示
        toastshow:{
            type:Boolean,
              required: false,
            default:function(){
                return false;
            }
        },
        //提示的内容
        toasttext:{
            type:String,
            required: false,
            default:function(){
                return 'no message';
            }
        },
        //显示的时间
        duration: {
            type: Number,
            default:3000,//默认3秒
            required:false
        }        
    },
    watch:{
        toastshow(val){
            if (this._timeout) clearTimeout(this._timeout)
            if (val && !!this.duration) {
             this._timeout = setTimeout(()=> this.toastshow = false, this.duration)
            }
        }
    }
}
</script>
<style>
    .toast{
        position:absolute;
        left:50%;
        margin-left:-25%;
        bottom:30px;
        display:block;
        width:200px;
        height:auto;
        text-align:center;
        color:white;
        background-color:rgba(0,0,0,0.5);
        border-radius:10px;
        z-index:10;
        transform:scale(1);
        padding:5px;
    }
    .toast-transition{
        transition: all .3s ease;
    }
    .toast-enter{
        opacity:0;
        transform:scale(0.1);
    }
    .toast-leave{
        opacity:0;
        transform:scale(0.1);
    }
</style>