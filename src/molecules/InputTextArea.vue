<template>
  <AtomLabel :for-id="id" :label="label" />
  <AtomTextArea
    :id="id"
    v-model:value="innerValue"
    :placeholder="placeholder"
    :rows="rows"
    :cols="cols"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomTextArea from '../atoms/AtomTextArea.vue';

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
