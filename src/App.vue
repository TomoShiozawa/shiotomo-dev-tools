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
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
