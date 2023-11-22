<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import ImageStyle from '@/models/ImageStyle'

const presetStyles = [
  {
    btnClass: 'blue',
    style: new ImageStyle('冷淡蓝', 'blue', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'green',
    style: new ImageStyle('草原绿', 'green', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'cyan',
    style: new ImageStyle('天空蓝', 'cyan', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'teal',
    style: new ImageStyle('草色青', 'teal', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'lime',
    style: new ImageStyle('清雅绿', 'lime', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'red',
    style: new ImageStyle('赤热红', 'red', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'pink',
    style: new ImageStyle('可爱粉', 'pink', 'white', '你好\n世界', 2, 720, 540, '')
  },
  {
    btnClass: 'purple',
    style: new ImageStyle('贵妇紫', 'purple', 'white', '你好\n世界', 2, 720, 540, '')
  }
]

const store = useAppStore()
</script>
<template>
  <div class="flex flex-wrap">
    <div v-for="item in presetStyles" :key="item.btnClass">
      <button
        @click="() => store.changeStyle(item.style)"
        v-if="item.btnClass === 'blue'"
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>

      <button
        v-if="item.btnClass === 'green'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'cyan'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'teal'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'lime'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'red'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'pink'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'purple'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
      <button
        v-if="item.btnClass === 'slate'"
        @click="() => store.changeStyle(item.style)"
        type="button"
        class="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {{ item.style.title }}
      </button>
    </div>
  </div>
</template>
