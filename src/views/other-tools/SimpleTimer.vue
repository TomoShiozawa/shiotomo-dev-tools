<template>
  <div class="w-full h-full bg-gray-100 dark:bg-gray-900">
    <div class="container flex flex-col items-center pt-20 m-auto">
      <h1 class="text-4xl text-center text-gray-600 dark:text-gray-300">
        タイマー
      </h1>
      <!-- eslint-disable tailwindcss/no-custom-classname -->
      <h2
        class="text-9xl text-center text-gray-600 dark:text-gray-300 font-source-code-pro"
      >
        <!-- eslint-enable tailwindcss/no-custom-classname -->
        {{ formatTime }}
      </h2>
      <div class="grid grid-cols-3 gap-x-4">
        <div class="col-span-1">
          <InputValue
            :id="'hour'"
            v-model:value="inputHours"
            :type="'number'"
            :label="'Hour'"
            @input="setTotalTime"
          />
        </div>
        <div class="col-span-1">
          <InputValue
            :id="'hour'"
            v-model:value="inputMinutes"
            :type="'number'"
            :label="'Minutes'"
            @input="setTotalTime"
          />
        </div>
        <div class="col-span-1">
          <InputValue
            :id="'hour'"
            v-model:value="inputSeconds"
            :type="'number'"
            :label="'Seconds'"
            @input="setTotalTime"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-5 w-1/2">
        <div class="sm:col-span-3 md:col-span-1">
          <AtomButton
            :label="'Start'"
            :disabled="isRunning"
            @click="startTimer"
          />
        </div>
        <div class="sm:col-span-3 md:col-span-1">
          <AtomButton
            :label="'Stop'"
            :disabled="!isRunning"
            @click="stopTimer"
          />
        </div>
        <div class="sm:col-span-3 md:col-span-1">
          <AtomButton :label="'Reset'" @click="resetTimer" />
        </div>
        <div class="sm:col-span-3 md:col-span-1">
          <AtomButton :label="'Clear'" @click="clearTimer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import InputValue from '../../molecules/InputValue.vue';
import AtomButton from '../../atoms/AtomButton.vue';

let timer = 0;
const inputHours = ref(0);
const inputMinutes = ref(0);
const inputSeconds = ref(0);
const totalTime = ref(0);
const isRunning = ref(false);
const timerExpired = ref(false);

const hours = computed(() => {
  return Math.floor(totalTime.value / 3600);
});
const minutes = computed(() => {
  return Math.floor((totalTime.value - 3600 * hours.value) / 60);
});
const seconds = computed(() => {
  return Math.floor(
    (totalTime.value - 3600 * hours.value - 60 * minutes.value) % 60
  );
});

const formatTime = computed(() => {
  const hoursString = hours.value.toString().padStart(2, '0');
  const minutesString = minutes.value.toString().padStart(2, '0');
  const secondsString = seconds.value.toString().padStart(2, '0');
  return `${hoursString}:${minutesString}:${secondsString}`;
});

const startTimer = () => {
  if (totalTime.value <= 0) {
    setTotalTime();
  }
  isRunning.value = true;
  timerExpired.value = false;
  timer = window.setInterval(() => {
    countDown();
  }, 1000);
};

const stopTimer = () => {
  isRunning.value = false;
  clearInterval(timer);
};

const resetTimer = () => {
  setTotalTime();
  timerExpired.value = false;
};

const clearTimer = () => {
  stopTimer();
  totalTime.value = 0;
  inputHours.value = 0;
  inputMinutes.value = 0;
  inputSeconds.value = 0;
  timerExpired.value = false;
};

const setTotalTime = () => {
  totalTime.value =
    inputHours.value * 3600 + inputMinutes.value * 60 + inputSeconds.value;
};

const countDown = () => {
  if (totalTime.value > 0) {
    totalTime.value -= 1;
  }

  if (totalTime.value <= 0) {
    stopTimer();
    timerExpired.value = true;
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

.font-source-code-pro {
  font-family: 'Source Code Pro', monospace;
}
</style>
