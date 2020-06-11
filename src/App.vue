<template>
  <div id="home">
    <div>
      <button @click="showLoginRegisterBox(1)">登录</button>
      <button @click="showLoginRegisterBox(2)">注册</button>
      <div class="header">
        <h1>网页标题</h1>
        <img src="./assets/logo.png" alt />
      </div>

      <hr />
      <div class="content">
        <div class="menu">
          <div v-for="item in menuList" :key="item.id" class="item">
            <div
              v-if="item.id == choosed"
              style="background: #777;color:#fff"
            >
              <a style="color:#fff">{{ item.text }}</a>
            </div>
            <div
              v-else
              style="color:#000"
              @click="chooseMenu(item.id)"
            >
              <a style="color:#000">{{ item.text }}</a>
            </div>
          </div>
        </div>

        <div class="userlist">
          <p>{{ choosed_text }}</p>

          <hr />
          <router-view/>
        </div>
      </div>
      <hr />
    </div>
    <LoginBox v-if="boxtarget" :target="boxtarget" @hideBox="hideLoginRegisterBox"></LoginBox>
    <div class="foot">Copyright © 2020 Dweb工作室</div>
  </div>
</template>

<script>
import axios from "axios";
import LoginBox from "../src/components/LoginBox"
export default {
  components:{
    LoginBox
  },
  data() {
    return {
      menuList: [],
      choosed: 1,
      choosed_text:'Django后端',
      boxtarget:0
    };
  },
  mounted() {
    this.getMenuList();
  },
  methods: {
    //获取分类列表
    getMenuList() {
      console.log("开始获取分类");
      axios({
        url: "http://127.0.0.1:9000/get-menu-list/",
        type: "json",
        method: "get"
      }).then(res => {
        console.log(res);
        this.menuList = res.data;
      });
    },
    chooseMenu(id){
      console.log(id)
      this.choosed = id
      for (let i = 0; i < this.menuList.length; i++) {
        if (id==this.menuList[i].id) {
          this.choosed_text = this.menuList[i].text
        }
      }
      //进行id传参跳转
      this.$router.push({path:'/',query:{menuId:id}})
    },
    //展示登录注册框体
    showLoginRegisterBox(value){
      this.boxtarget = value
    },
    //隐藏父组件
    hideLoginRegisterBox(){
      this.boxtarget = 0
    }
  }
};
</script>

<style>
</style>
