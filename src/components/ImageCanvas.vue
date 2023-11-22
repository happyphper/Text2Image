<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import Scrollbar from 'smooth-scrollbar'

const app = useAppStore()

const {
  bgColor,
  text,
  textSize,
  textColor,
  imageHeight,
  imageWidth,
  font,
  screenWidth,
  screenHeight
} = storeToRefs(app)

const textSizeStr = computed(() => textSize.value + 'rem')

screenWidth.value =
  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
screenHeight.value =
  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

let scrollbar: Scrollbar

onMounted(() => {
  // 在组件挂载后初始化 smooth-scrollbar
  initScrollbar()
})

onBeforeUnmount(() => {
  // 在组件销毁前销毁 smooth-scrollbar
  destroyScrollbar()
})

function initScrollbar() {
  // 获取容器元素
  const container = document.getElementById('canvas')

  console.log(container)

  if (container != null) {
    // 初始化 smooth-scrollbar
    scrollbar = Scrollbar.init(container)

    console.log('scrollbar.init', { alwaysShowTracks: true })
  }
}

function destroyScrollbar() {
  // 销毁 smooth-scrollbar
  if (scrollbar) {
    scrollbar.destroy()
  }
}

// 添加resize事件监听器
window.addEventListener('resize', function() {
    screenWidth.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    screenHeight.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    destroyScrollbar()

    initScrollbar()
});

// function calculate(screenWidth:number, screenHeight:number, imageW:number, imageH:number) {
//     // 减去 padding
//     var sHeight = screenHeight - 80;
//     var sWidth =( screenWidth - 80)/2;

//     console.log('sWidth', sWidth, 'sHeight', sHeight, 'imageW', imageW, 'imageH', imageH)
//     if (imageH > sHeight) {
//       // 换算高度
//       imageW = sHeight / imageH * imageW
//       imageH = sHeight
//     }

//     if (imageW > sWidth) {
//       imageH = sWidth / imageW * imageH
//       imageW = sWidth
//       console.log(imageW, imageH)
//     }

//     return [imageW, imageH]
// }

let imageSizes = computed(() => {
  return [imageWidth.value, imageHeight.value]
  // return calculate(screenWidth.value, screenHeight.value, imageWidth.value, imageHeight.value)
})
</script>
<template>
  <div class="bg-red-50 flex justify-center h-full">
    <div class="h-full overflow-auto">
      <section
        ref="canvas"
        id="canvas"
        :style="{
          backgroundColor: bgColor,
          width: imageSizes[0] + 'px',
          height: imageSizes[1] + 'px'
        }"
      >
      <div   
      :style="{
          backgroundColor: bgColor,
          width: imageSizes[0] + 'px',
          height: imageSizes[1] + 'px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }">
        <span
          v-html="text"
          class="whitespace-pre-wrap"
          :style="{ fontSize: textSizeStr, color: textColor, fontFamily: font }"
        ></span>
      </div>
      </section>
    </div>
  </div>
</template>
<style>
.scroll-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>