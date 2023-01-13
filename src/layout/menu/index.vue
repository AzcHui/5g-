<template>
  <div class="layout-menu">
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" key-field="name" :render-label="renderMenuLabel" @update:value="handleUpdateValue" />
  </div>
</template>

<script setup>
import { computed, ref, h } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NMenu } from 'naive-ui';

// 获取路由信息
const route = useRoute();
const router = useRouter();
const { routes } = router.options;
// 当前选中菜单
const activeKey = ref(route.name);

// 路由菜单
// const menuOptions = computed(() => {
//   return routes[0].children.map(item => {
//     if (item.path) {
//       return {
//         label: item.meta.title,
//         key: item.path,
//         isRoute: true
//       };
//     }
//     return {
//       label: () =>
//         h(
//           'a',
//           {
//             href: item.meta.href,
//             target: '_blank',
//             rel: 'noopenner noreferrer'
//           },
//           item.meta.title
//         ),
//       key: item.meta.title,
//       isRoute: false
//     };
//   });
// });
const menuOptions = ref(routes[0].children);
console.log(menuOptions.value);

// 设定菜单label
function renderMenuLabel(option) {
  // console.log(option);
  if (option.path) {
    return option.meta.title;
  }
  return h('a', { href: option.meta.href, target: '_blank' }, option.meta.title);
}

// 跳转路由
function handleUpdateValue(key, item) {
  console.log(key, item);
  item.path && router.push(item.path);
}
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
      .n-menu-item-content-header,
      a {
        color: #fff !important;
      }
    }
    &.n-menu--horizontal .n-menu-item-content:not(.n-menu-item-content--disabled):hover {
      background-color: #3260ab;
    }
    &.n-menu--horizontal .n-menu-item-content.n-menu-item-content--selected {
      // color: #fff;
      background-color: #3260ab;
    }
  }
}
</style>
