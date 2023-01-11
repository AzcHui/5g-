<template>
  <div class="layout-menu">
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
// import { NIcon } from "naive-ui";
import { NMenu } from "naive-ui";

// function renderIcon(icon) {
//   return () => h(NIcon, null, { default: () => h(icon) });
// }

const activeKey = ref(null)

const menuOptions = [
  {
    label: "首页",
    key: "hear-the-wind-sing",
  },
  {
    label: "5G概念",
    key: "pinball-1973"
  },
  {
    label: "5G通信",
    key: "a-wild-sheep-chase",
  },
  {
    label: "无线电概念",
    key: "a-wild-sheep-chase",
  },
  {
    label: "在线客服",
    key: "a-wild-sheep-chase",
  },
  {
    label: "关于5G发展",
    key: "dance-dance-dance",
    children: [
      {
        label: "5G发展",
        key: "the-past-increases-the-future-recedes"
      },
      {
        label: "天线材料概况",
        key: "the-past-increases-the-future-recedes"
      },
      {
        label: "热导材料研究",
        key: "the-past-increases-the-future-recedes"
      },
      {
        label: "电磁材料研究",
        key: "the-past-increases-the-future-recedes"
      },
      {
        label: "微波介质",
        key: "the-past-increases-the-future-recedes"
      },
      {
        label: "先进封装行业",
        key: "the-past-increases-the-future-recedes"
      }
    ]
  },
  {
    label: "手机APP",
    key: "a-wild-sheep-chase",
  }
];
</script>

<style lang="less">
  .layout-menu {
    background-color: #72a3e8;
  }
</style>