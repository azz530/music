<template>
  <div class="container height-p100 df ai-c jc-c">
    <div class="loginForm df fdc jc-c ai-c">
      <div class="title f20 mb50">登录</div>
      <el-form ref="login" :model="loginForm" :rule="loginRule">
        <el-form-item>
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {},
      loginRule: {},
    };
  },

  methods: {
  },
}
</script>
<style lang='scss' scoped>
.container {
  .title {
  }
  .loginForm {
    width: 35vw;
    height: 50vh;
    border: 1px solid #dddddd;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
  }
}
</style>