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
      <SideBarAccordion :label="'Other Tools'">
        <div class="flex flex-col">
          <SideBarMenu
            v-for="item in otherTools"
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
  { label: 'Hash Generator', to: { name: 'HashGenerator' } },
  { label: 'UUID Generator', to: { name: 'UUIDGenerator' } },
  { label: 'Base64 Encoder', to: { name: 'Base64Encoder' } },
];

const otherTools = [{ label: 'Roulette', to: { name: 'Roulette' } }];
</script>

<style scoped></style>
