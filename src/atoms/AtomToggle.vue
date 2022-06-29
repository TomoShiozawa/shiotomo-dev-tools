<template>
  <label class="my-auto">
    <input :id="id" v-model="innerValue" type="checkbox" class="peer sr-only" />
    <span
      class="block after:block p-[1px] w-10 after:w-1/2 h-5 after:h-full bg-gray-300 after:bg-white peer-checked:bg-indigo-500 rounded-full after:rounded-full after:transition peer-checked:after:translate-x-[calc(100%)] cursor-pointer"
    />
  </label>
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
  value: { type: Boolean, default: false },
});

const emit = defineEmits(['update:value']);
</script>

<style scoped></style>
