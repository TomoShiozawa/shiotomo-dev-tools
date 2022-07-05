<template>
  <AtomLabel :for-id="id" :label="label" />
  <AtomInput
    :id="id"
    v-model="innerValue"
    :type="type"
    :placeholder="placeholder"
    class="py-1 px-3 w-full text-base leading-8 text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-600 rounded border border-gray-300 focus:border-indigo-500 dark:border-gray-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors ease-in-out"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomInput from '../atoms/AtomInput.vue';

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
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  value: { type: [String, Number], default: '' },
});

const emit = defineEmits(['update:value']);
</script>

<style scoped></style>
