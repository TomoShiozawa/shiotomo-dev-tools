<template>
  <div class="w-full h-full bg-gray-100 dark:bg-gray-900">
    <div class="container pt-20">
      <h2 class="text-4xl text-center text-gray-600 dark:text-gray-300">
        base64エンコードするやつ
      </h2>
      <div class="flex flex-col items-center mt-5">
        <div class="sm:w-full md:w-1/2">
          <InputTextArea
            :id="'plain-text'"
            v-model:value="plainText"
            :label="'元のテキスト'"
            @input="encode"
          />
        </div>
        <div class="sm:w-full md:w-1/2">
          <InputTextArea
            :id="'base64-encoded'"
            v-model:value="base64Encoded"
            :label="'Base64 Encoded'"
            @input="decode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Buffer } from 'buffer';
import { ref } from 'vue';
import InputTextArea from '../molecules/InputTextArea.vue';

const plainText = ref('');
const base64Encoded = ref('');

const encode = () => {
  base64Encoded.value = Buffer.from(plainText.value).toString('base64');
};

const decode = () => {
  plainText.value = Buffer.from(base64Encoded.value, 'base64').toString();
};
</script>

<style scoped></style>
