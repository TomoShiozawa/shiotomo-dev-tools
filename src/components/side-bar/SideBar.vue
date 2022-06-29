<template>
  <div class="overflow-scroll relative w-full h-full bg-white dark:bg-gray-800">
    <div class="flex flex-col">
      <div class="justify-start items-center mx-6 mt-10">
        <div class="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Shiotomo Dev Tools
        </div>
        <DarkModeToggle />
      </div>
      <SideBarMenu v-for="item in items" :key="item.label" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBarMenu from '@/components/side-bar/SideBarMenu.vue';
import DarkModeToggle from './DarkModeToggle.vue';

const items = [
  { label: 'About', to: { name: 'Home' } },
  { label: 'HashGenerator', to: { name: 'HashGenerator' } },
];
</script>

<style scoped></style>
