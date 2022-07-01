<template>
  <div class="w-full h-full bg-gray-100 dark:bg-gray-900">
    <div class="container pt-20">
      <h2 class="text-4xl text-center text-gray-600 dark:text-gray-300">
        UUID(v4)生成するやつ
      </h2>
      <div class="flex flex-col items-center mt-5">
        <div class="sm:w-full md:w-1/2">
          <AtomButton :label="'UUID 生成'" @click="generate" />
          <AtomInput v-model:value="uuid" class="mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

import AtomButton from '../atoms/AtomButton.vue';
import AtomTextArea from '../atoms/AtomTextArea.vue';
import AtomInput from '../atoms/AtomInput.vue';

const uuid = ref('');

const generate = () => {
  uuid.value = uuidv4();
};
</script>

<style scoped></style>
