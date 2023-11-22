<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const store = useAppStore()
const { imageWidth, imageHeight } = storeToRefs(store)
</script>

<template>
  <div class="flex items-center">
    <input
      v-model="imageWidth"
      type="text"
      id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="宽"
      required
    />

    <span class="mx-2">X</span>

    <input
    v-model="imageHeight"
      type="text"
      id="first_name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="高"
      required
    />
  </div>
</template>
