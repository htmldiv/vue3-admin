<template>
  <div class="user">
    <el-input placeholder="请输入用户名" v-model="state.userName"></el-input>
    <el-input placeholder="请输入密码" v-model="state.password"></el-input>
    <el-button type="primary" style="width: 150px" @click="login">登陆</el-button>
  </div>
  
   
</template>

<script>
import { reactive, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const state = reactive({
      userName: '',
      password: '',
    })
    const router = useRouter()
    const login = () => {
      if(state.userName == 'admin' && state.password == 1) {
        console.log(12)
        router.push({path:'/navs'})
      }
    }
    return {
      state,
      login
    }
  },
})
</script>
<style  scoped>
  .user {
    width: 200px;
  }
  .user .el-input{
    margin-bottom: 20px;
  }
</style>