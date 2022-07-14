<template>
  <button
    class="py-2 px-8 w-full text-lg text-white bg-indigo-500 hover:bg-indigo-600 rounded border-0 focus:outline-none"
    :class="{ 'bg-gray-600 hover:bg-gray-600': disabled }"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, default: 'Button' },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style scoped></style>
