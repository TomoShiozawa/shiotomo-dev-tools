<template>
  <textarea
    :id="id"
    v-model="innerValue"
    class="py-1 px-3 w-full text-base leading-5 text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-600 rounded border border-gray-300 focus:border-indigo-500 dark:border-gray-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors ease-in-out"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
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
  placeholder: { type: String, default: '' },
  value: { type: String, default: '' },
  rows: { type: Number, default: 5 },
  cols: { type: Number, default: 40 },
});

const emit = defineEmits(['update:value', 'input']);

const handleInput = () => {
  emit('input');
};
</script>

<style scoped></style>
