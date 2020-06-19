<template>
  <div id="login-userinfo">
    <img src="../assets/img/admin.jpg" alt />
    <p>{{nickName}}</p>
  </div>
</template>


<script>
import { evetBus } from '../main.js';
export default {
  props:['testName'],
  mounted() {
    evetBus.$on('changeTestName',(data)=>{
      console.log(data)
      this.nickName = data
    })
  },
  data() {
    return {
      nickName:''
    }
  },
};
</script>