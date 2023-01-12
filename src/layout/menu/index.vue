<template>
  <div class="layout-menu">
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleUpdateValue" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NMenu } from 'naive-ui';

// 获取路由信息
const route = useRoute();
const router = useRouter();
const { routes } = router.options;

// 当前选中菜单
const activeKey = ref(route.path);

// 路由菜单
const menuOptions = computed(() => {
  return routes[0].children.map(item => {
    return {
      label: item.meta.title,
      key: item.path
    };
  });
});

// 跳转路由
function handleUpdateValue(key) {
  console.log(key);
  router.push(key)
}

const menuOptions2 = [
  {
    label: '首页',
    key: 'hear-the-wind-sing'
  },
  {
    label: '5G概念',
    key: 'pinball-1973'
  },
  {
    label: '5G通信',
    key: 'a-wild-sheep-chase'
  },
  {
    label: '无线电概念',
    key: 'a-wild-sheep-chase'
  },
  {
    label: '在线客服',
    key: 'a-wild-sheep-chase'
  },
  {
    label: '关于5G发展',
    key: 'dance-dance-dance',
    children: [
      {
        label: '5G发展',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '天线材料概况',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '热导材料研究',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '电磁材料研究',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '微波介质',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '先进封装行业',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: '手机APP',
    key: 'a-wild-sheep-chase'
  }
];
</script>

<style lang="less">
.layout-menu {
  margin: 0 auto;
  width: 1280px;
  .n-menu {
    .n-menu-item-content {
      width: 120px;
      font-size: 16px;
      text-align: center;
      padding: 0;
      .n-menu-item-content-header {
        color: #fff !important;
      }
    }
    &.n-menu--horizontal .n-menu-item-content.n-menu-item-content--selected {
      // color: #fff;
      background-color: #3260ab;
    }
  }
}
</style>
