<template>
  <n-layout>
    <n-layout-header>
      <AppHeader />
      <AppMenu />
    </n-layout-header>
    <n-layout-content>
      <AppMain />
    </n-layout-content>
    <n-layout-footer>
      <AppFooter />
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import { NLayout,NLayoutHeader,NLayoutContent,NLayoutFooter } from 'naive-ui'
import AppHeader from './header/index.vue';
import AppMenu from './menu/index.vue';
import AppMain from './content/index.vue';
import AppFooter from './footer/index.vue';
</script>
