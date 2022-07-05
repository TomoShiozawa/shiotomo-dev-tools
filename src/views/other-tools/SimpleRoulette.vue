<template>
  <div class="p-8 w-full h-full bg-gray-100 dark:bg-gray-900">
    <div class="container grid grid-cols-3 gap-4 pt-20">
      <h2
        class="col-span-3 text-4xl text-center text-gray-600 dark:text-gray-300"
      >
        ルーレット
      </h2>
      <div class="col-span-1">
        <InputTextArea
          :id="'item-text'"
          v-model:value="itemText"
          :label="'アイテムの入力（改行区切り）'"
          :rows="20"
        />
        <AtomButton v-if="!isRunning" :label="'START'" @click="start" />
        <AtomButton v-if="isRunning" :label="'STOP'" @click="stop" />
      </div>
      <div class="col-span-2">
        <div class="grid grid-cols-8 grid-rows-6 w-full h-full">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex justify-center items-center font-bold text-center text-gray-600 dark:text-gray-300"
            :class="{ 'border-4 border-cyan-300': isSelected(index) }"
          >
            <p class="break-all">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import AtomButton from '../../atoms/AtomButton.vue';
import InputTextArea from '../../molecules/InputTextArea.vue';

const itemText = ref('');
const items = computed(() => itemText.value.split('\n'));
const result = ref('');
const selectedIndex = ref(0);
const isRunning = ref(false);
let interval = 0;

const start = () => {
  isRunning.value = true;
  interval = window.setInterval(() => {
    selectedIndex.value = Math.floor(Math.random() * items.value.length);
  }, 10);
};

const stop = () => {
  clearInterval(interval);
  isRunning.value = false;
  result.value = items.value[selectedIndex.value];
};

const isSelected = (index: number) => {
  return index === selectedIndex.value;
};
</script>

<style scoped></style>
