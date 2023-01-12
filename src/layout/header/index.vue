<template>
  <div class="layout-header">
    <div class="layout-header-main">
      <img id="logo" src="@/assets/logo.png" alt="" />
      <div class="login-group">
        <n-input-group>
          <n-input-group-label class="input-label">1</n-input-group-label>
          <n-input placeholder="请输入用户账号" />
        </n-input-group>
        <n-input-group>
          <n-input-group-label class="input-label">2</n-input-group-label>
          <n-input type="password" placeholder="请输入登录密码" />
        </n-input-group>
        <n-input-group>
          <n-input placeholder="请输入验证码" :style="{ width: '112px' }" />
          <n-input-group-label><img src="@/assets/PC/yanzhengman.png" :style="{ width: 'auto', height: '100%' }" /></n-input-group-label>
        </n-input-group>
        <n-button color="#ed3f14">登录</n-button>
        <n-button color="#ed3f14">注册</n-button>
        <n-button color="#ed3f14">联系客服</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NInputGroup, NInputGroupLabel, NInput, NButton } from 'naive-ui';
</script>

<style lang="less">
.layout-header {
  padding: 0 20px;
  background-color: #abcff6;
  &-main {
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
  #logo {
    height: 70px;
    margin: 15px 0;
  }
  .login-group {
    // display: flex;
    // align-items: center;
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    grid-gap: 0 10px;
    // .n-input-group {
    //   border-radius: 5px;
    //   overflow: hidden;
    // }
    .n-input {
      width: 150px;
    }
    .n-input-group-label {
      padding: 0;
      &.input-label {
        padding: 0 8px;
        font-style: oblique;
      }
    }
  }
}
</style>
