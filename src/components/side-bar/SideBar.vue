<template>
  <div class="overflow-scroll relative w-full h-full bg-white dark:bg-gray-800">
    <div class="flex flex-col">
      <div class="justify-start items-center mx-6 mt-10">
        <div class="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Shiotomo Dev Tools
        </div>
        <DarkModeToggle />
      </div>
      <div class="px-6 mt-5">
        <SideBarMenu :item="{ label: 'About', to: { name: 'About' } }" />
      </div>
      <SideBarAccordion :label="'Dev Tools'">
        <div class="flex flex-col">
          <SideBarMenu
            v-for="item in devTools"
            :key="item.label"
            :item="item"
            class="ml-2"
          />
        </div>
      </SideBarAccordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBarMenu from '@/components/side-bar/SideBarMenu.vue';
import DarkModeToggle from './DarkModeToggle.vue';
import SideBarAccordion from './SideBarAccordion.vue';

const devTools = [
  { label: 'HashGenerator', to: { name: 'HashGenerator' } },
  { label: 'UUIDGenerator', to: { name: 'UUIDGenerator' } },
  { label: 'Base64Encoder', to: { name: 'Base64Encoder' } },
];
</script>

<style scoped></style>
