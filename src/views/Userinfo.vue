<template>
  <div id="userinfo">
    <h1>我的信息</h1>
    <img :src="'http://127.0.0.1:9000/upload/'+userinfo.headImg" alt />
    <div>{{changeNickName}}</div>
    <div>身份：管理员</div>
    <input v-model="changeNickName" type="text" name="" id="">
    <button @click="changeAllNickName">修改</button>
  </div>
</template>

<script>
import { evetBus } from '../main.js';
export default {
  data() {
    return {
      userinfo:{},
      changeNickName:''
    }
  },
  mounted() {
    this.getUserinfo()
    this.changePageUI()
  },
  methods:{
    changeAllNickName(){
      var nickName = this.changeNickName
      this.userinfo.nickName = nickName
      // this.$emit('editName',nickName)
      evetBus.$emit('changeTestName',nickName)
    },
    getUserinfo(){
      console.log('开始获取用户信息')
      this.userinfo = this.$store.state.userinfo
    },
    changePageUI(){
      this.$emit('changeUI',true)
      this.$emit('hideBox')
    }
  }
};
</script>

<style>
#userinfo {
  margin-bottom: 10px;
}
</style>