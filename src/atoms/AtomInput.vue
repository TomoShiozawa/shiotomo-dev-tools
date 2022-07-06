<template>
  <input
    :id="id"
    v-model="innerValue"
    :type="type"
    :placeholder="placeholder"
    class="py-1 px-3 w-full text-base leading-8 text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-600 rounded border border-gray-300 focus:border-indigo-500 dark:border-gray-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors ease-in-out"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const innerValue = computed({
  get: () => {
    return props.value;
  },
  set: (newValue) => {
    emit('update:value', newValue);
  },
});

const props = defineProps({
  id: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  value: { type: [String, Number], default: '' },
});

const emit = defineEmits(['update:value', 'input']);

const handleInput = () => {
  emit('input');
};
</script>

<style scoped></style>
