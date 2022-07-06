<template>
  <div class="w-full h-full bg-gray-100 dark:bg-gray-900">
    <div class="container pt-20 m-auto md:w-1/2">
      <h2 class="text-4xl text-center text-gray-600 dark:text-gray-300">
        進数変換するやつ
      </h2>
      <div class="grid grid-cols-2 gap-8 w-full">
        <div class="col-span-1">
          <InputValue
            :id="'decimal-number'"
            v-model:value="decimalNumber"
            :label="'10進数'"
            @input="changeNumbers(decimalNumber, 10)"
          />
        </div>
        <div class="col-span-1">
          <InputValue
            :id="'binary-number'"
            v-model:value="binaryNumber"
            :label="'2進数'"
            @input="changeNumbers(binaryNumber, 2)"
          />
        </div>
        <div class="col-span-1">
          <InputValue
            :id="'octal-number'"
            v-model:value="octalNumber"
            :label="'8進数'"
            @input="changeNumbers(octalNumber, 8)"
          />
        </div>
        <div class="col-span-1">
          <InputValue
            :id="'hexadecimal-number'"
            v-model:value="hexadecimalNumber"
            :label="'16進数'"
            @input="changeNumbers(hexadecimalNumber, 16)"
          />
        </div>
        <div class="col-span-1">
          <div class="w-1/2">
            <InputSelect
              :id="'selected-base'"
              v-model:value="selectedBase"
              :items="selectBases"
            />
          </div>
          <div class="mt-2">
            <InputValue
              :id="'selected-base-number'"
              v-model:value="selectedBaseNumber"
              @input="changeNumbers(selectedBaseNumber, selectedBase)"
            />
          </div>
        </div>
        <div class="col-span-1">
          <div class="w-1/2">
            <InputSelect
              :id="'selected-base-2'"
              v-model:value="selectedBase2"
              :items="selectBases"
            />
          </div>
          <div class="mt-2">
            <InputValue
              :id="'selected-base-number-2'"
              v-model:value="selectedBaseNumber2"
              @input="changeNumbers(selectedBaseNumber2, selectedBase2)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputValue from '../molecules/InputValue.vue';
import InputSelect from '../molecules/InputSelect.vue';

const masterNum = ref(0);
const selectedBase = ref(10);
const selectedBase2 = ref(10);
const decimalNumber = ref('');
const binaryNumber = ref('');
const octalNumber = ref('');
const hexadecimalNumber = ref('');
const selectedBaseNumber = ref('');
const selectedBaseNumber2 = ref('');
const selectBases = [...Array(31).keys()].map((val) => {
  return { label: `${val + 2}進数`, value: val + 2 };
});

const changeNumbers = (input: string, base: number) => {
  if (!input) {
    return;
  }
  masterNum.value = parseInt(input, base);

  decimalNumber.value = masterNum.value.toString(10);
  binaryNumber.value = masterNum.value.toString(2);
  octalNumber.value = masterNum.value.toString(8);
  hexadecimalNumber.value = masterNum.value.toString(16);
  selectedBaseNumber.value = masterNum.value.toString(selectedBase.value);
  selectedBaseNumber2.value = masterNum.value.toString(selectedBase2.value);
};
</script>

<style scoped></style>
