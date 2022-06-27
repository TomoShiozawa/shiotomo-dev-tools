<template>
  <nav class="px-6 mt-5">
    <router-link
      class="flex items-center p-2 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
      :to="item.to"
      ><span class="mx-4 text-lg font-normal">{{
        item.label
      }}</span></router-link
    >
  </nav>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
type SideBarMenu = {
  label: string;
  to: { name: string };
};

defineProps({
  item: {
    type: Object as PropType<SideBarMenu>,
    default: () => {
      return { label: 'menu', to: { name: 'Home' } };
    },
  },
});
</script>

<style scoped></style>
