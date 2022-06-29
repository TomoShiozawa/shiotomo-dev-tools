<template>
  <div class="flex w-screen h-screen">
    <div class="min-w-[15rem] h-full">
      <SideBar />
    </div>
    <div class="w-full h-full">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/side-bar/SideBar.vue';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
