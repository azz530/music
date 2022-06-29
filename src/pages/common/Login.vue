<template>
  <div class="container height-p100 df ai-c jc-c">
    <div class="loginForm df fdc jc-c ai-c">
      <div class="title f20 pb50">登录</div>
      <input type="text" placeholder="请输入账号" />
      <input type="password" placeholder="请输入密码" />
      <button>登录</button>
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
    login () {

    },
  },
}
</script>
<style lang='scss' scoped>
.container {
  background: radial-gradient(
      ellipse farthest-side at 76% 77%,
      rgba(245, 228, 212, 0.25) 4%,
      rgba(255, 255, 255, 0) calc(4% + 1px)
    ),
    radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%),
    linear-gradient(135deg, #ff0000 0%, #000036 100%),
    radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%),
    linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
  background-blend-mode: normal, normal, screen, overlay, normal;
  .title {
    color: #fff;
    font-size: 30px;
  }
  .loginForm {
    width: 25vw;
    height: 60vh;
    border: 2px solid #efeeee;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.512);
    border-radius: 15px;

    input {
      width: 18vw;
      height: 5vh;
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
      border-bottom: 1px solid #fff;
      background: transparent;
      color: #fff;
      font-size: 16px;
      &::-webkit-input-placeholder {
        color: #fff;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      background: transparent;
      width: 10vw;
      height: 5vh;
      border: 1px solid #fff;
      border-radius: 30px;
      margin-top: 30px;
      color: #fff;
    }
  }
}
</style>