<template>
  <select
    :id="id"
    v-model="selected"
    class="py-1 px-3 w-full text-base leading-8 text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-600 rounded border border-gray-300 focus:border-indigo-500 dark:border-gray-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors ease-in-out"
  >
    <option v-for="item in items" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

export type Item = {
  label: string;
  value: string | number;
};

const selected = computed({
  get: () => {
    return props.value;
  },
  set: (newValue) => {
    emit('update:value', newValue);
  },
});

const props = defineProps({
  id: { type: String, default: '' },
  items: { type: Array as PropType<Item[]>, default: () => [] },
  value: { type: [String, Number], default: '' },
});

const emit = defineEmits(['update:value']);
</script>

<style scoped></style>
