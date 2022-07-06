<template>
  <AtomLabel :for-id="id" :label="label" />
  <AtomSelect :id="id" v-model:value="selected" :items="items" />
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomSelect from '../atoms/AtomSelect.vue';
import { Item } from '../atoms/AtomSelect.vue';

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
  label: { type: String, default: '' },
  items: { type: Array as PropType<Item[]>, default: () => [] },
  value: { type: [String, Number], default: '' },
});

const emit = defineEmits(['update:value']);
</script>

<style scoped></style>
