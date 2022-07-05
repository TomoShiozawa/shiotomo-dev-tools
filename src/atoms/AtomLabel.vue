<template>
  <label :for="forId" class="w-full text-xl text-gray-600 dark:text-gray-300">
    {{ label }}
  </label>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, default: '' },
  forId: { type: String, default: '' },
});
</script>

<style scoped></style>
