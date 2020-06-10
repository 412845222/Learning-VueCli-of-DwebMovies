<template>
  <div id="userlist">
    <div v-for="item in imglist" :key="item.pk" class="user">
      <img :src="apiurl+'upload/'+item.headImg" alt />
      <p>{{ item.nickName }}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      apiurl:'http://127.0.0.1:9000/',
      imglist:[],
      menuId:1
    }
  },
  //用户在看到页面之前，最后Vue提供的一次函数执行
  mounted(){
    this.getUserList(this.menuId)
  },
  watch:{
    $route(to){
      console.log(to.query.menuId)
      this.menuId = to.query.menuId
      this.getUserList(this.menuId)
    }
  },
  methods:{
    //从这里开始后端的请求
    getUserList(id){
      console.log('开始获取分类用户列表'+id)
      axios({
        url:'http://127.0.0.1:9000/get-user-list/',
        type:'json',
        params:{
          id
        },
        method:'get'
      }).then((res)=>{
        console.log(res)
        this.imglist = res.data
      })
    }
  }
};
</script>


<style>
</style>