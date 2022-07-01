<template>
  <div class="w-full h-full bg-gray-100 dark:bg-gray-900">
    <div class="container pt-20">
      <h2 class="text-4xl text-center text-gray-600 dark:text-gray-300">
        Hash生成するやつ
      </h2>
      <div class="flex flex-col items-center mt-5">
        <div class="sm:w-full md:w-1/2">
          <h2 class="text-xl text-gray-600 dark:text-gray-300">元のテキスト</h2>
          <AtomTextArea v-model:value="plainText" />
        </div>
        <div class="gap-4 sm:flex sm:w-full md:w-1/2">
          <AtomButton :label="'MD5'" @click="md5Digest" />
          <AtomButton :label="'SHA-256'" @click="sha256Digest" />
          <AtomButton :label="'SHA-512'" @click="sha512Digest" />
        </div>
        <div class="mt-5 sm:w-full md:w-1/2">
          <h2 class="text-xl text-gray-600 dark:text-gray-300">Hash値</h2>
          <AtomTextArea v-model:value="hashDigest" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CryptoJS from 'crypto-js';

import AtomTextArea from '../atoms/AtomTextArea.vue';
import AtomButton from '../atoms/AtomButton.vue';

const plainText = ref('');
const hashDigest = ref('');

const md5Digest = () => {
  hashDigest.value = CryptoJS.MD5(plainText.value).toString(CryptoJS.enc.Hex);
};

const sha256Digest = () => {
  hashDigest.value = CryptoJS.SHA256(plainText.value).toString(
    CryptoJS.enc.Hex
  );
};

const sha512Digest = () => {
  hashDigest.value = CryptoJS.SHA512(plainText.value).toString(
    CryptoJS.enc.Hex
  );
};
</script>

<style scoped></style>
