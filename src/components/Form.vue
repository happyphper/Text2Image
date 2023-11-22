<script setup lang="ts">
import ColorPicker from '@/components/ColorPicker.vue'
import ImageSize from '@/components/ImageSize.vue'
import StyleButtons from '@/components/StyleButtons.vue'
import MyDivider from '@/components/MyDivider.vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import html2canvas from 'html2canvas'

const store = useAppStore()

const { text, title, fileName, imageWidth, imageHeight } = storeToRefs(store)

function generateImg(filename: string) {
  // Get the target div
  const captureDiv = document.getElementById('canvas')
  if (captureDiv === null) {
    return
  }
  // Use html2canvas to capture the div
  html2canvas(captureDiv, { width: imageWidth.value, height: imageHeight.value, scale: 1 }).then(
    function (canvas) {
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/png')

      // Create a link element and set its attributes
      const link = document.createElement('a')

      link.href = dataUrl

      link.download = filename + '.png'

      // Append the link to the document and trigger the download
      document.body.appendChild(link)

      link.click()

      // Clean up by removing the link
      document.body.removeChild(link)
    }
  )
}

function previewImg() {
  // Get the target div
  const captureDiv = document.getElementById('canvas')
  if (captureDiv === null) {
    return
  }


  // Use html2canvas to capture the div
  html2canvas(captureDiv, { width: imageWidth.value, height: imageHeight.value, scale: 1 }).then(
    function (canvas) {
      // 获取图片数据URL
      const dataUrl = canvas.toDataURL('image/png')

      // 打开新窗口
      const newWindow = window.open()

      if (newWindow == null) {
        return
      }

      // 在新窗口中创建一个图片元素
      const img = newWindow.document.createElement('img')

      // 设置图片的 src 属性为数据URL
      img.src = dataUrl

      // 将图片元素添加到新窗口中
      newWindow.document.body.appendChild(img)
    }
  )
}
</script>

<template>
  <div class="flex flex-col">
    <section class="flex flex-col">
      <label for="first_name" class="block text-base mb-2 font-medium text-gray-500 dark:text-white"
        >预置风格</label
      >
      <StyleButtons></StyleButtons>
    </section>

    <MyDivider />

    <section class="flex flex-row justify-between items-center">
      <label for="first_name" class="block text-base mb-2 font-medium text-gray-500 dark:text-white"
        >当前风格</label
      >
      <span class="text-red font-bold">{{ title }}</span>
    </section>

    <MyDivider />

    <section class="flex justify-between items-center">
      <label for="first_name" class="block text-base font-medium text-gray-500 dark:text-white"
        >图片大小</label
      >
      <ImageSize></ImageSize>
    </section>

    <MyDivider />

    <section class="flex justify-between">
      <label class="block text-base font-medium text-gray-500">背景颜色</label>
      <ColorPicker @save="(color: string) => (store.bgColor = color)"></ColorPicker>
    </section>

    <MyDivider />

    <section class="flex justify-between">
      <label class="block text-base font-medium text-gray-500">文本颜色</label>
      <ColorPicker @save="(color: string) => (store.textColor = color)"></ColorPicker>
    </section>

    <MyDivider />

    <section>
      <label class="block text-base mb-2 font-medium text-gray-500">文本内容</label>
      <textarea
        v-model="text"
        rows="4"
        class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </section>

    <MyDivider />

    <section class="flex justify-between items-center">
      <label class="block text-base mb-2 font-medium text-gray-500">开源字体</label>
      <select
        v-model="store.font"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option v-for="item in store.fonts" :key="item.title" :value="item.font">
          {{ item.title }}
        </option>
      </select>
    </section>

    <MyDivider />

    <section class="flex justify-between items-center">
      <label class="block text-base mb-2 font-medium text-gray-500">字体大小</label>
      <div>
        <input
          v-model="store.textSize"
          type="number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="1"
          required
          step="0.5"
        />
      </div>
    </section>

    <MyDivider />

    <section class="flex justify-between items-center">
      <label class="block text-base mb-2 font-medium text-gray-500">文件名称</label>
      <input
        v-model="fileName"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="冷淡蓝"
        required
      />
    </section>

    <MyDivider />

    <section class="flex justify-end">
      <a
        @click="() => previewImg()"
        href="#"
        class="text-white bg-gray-400 mr-4 dark:text-white hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >预览</a
      >

      <a
        @click="() => generateImg(fileName)"
        href="#"
        class="text-white bg-blue-700 dark:text-white hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >下载</a
      >
    </section>
  </div>
</template>

<style>
.input-item {
  display: flex;
  justify-content: space-between;
  width: 500px;
}
</style>
