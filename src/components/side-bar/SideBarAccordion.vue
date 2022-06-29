<template>
  <nav class="px-6 mt-5">
    <button
      class="flex items-center p-2 w-full text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
      @click="toggleDisplayContent"
    >
      <span class="mx-4 text-lg font-normal"> {{ label }} </span>
      <svg
        v-if="!displayContent"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-auto w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <svg
        v-if="displayContent"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-auto w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
    <slot v-if="displayContent" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const displayContent = ref(false);

defineProps({
  label: { type: String, default: 'menu' },
});

const toggleDisplayContent = () => {
  displayContent.value = !displayContent.value;
};
</script>

<style scoped></style>
