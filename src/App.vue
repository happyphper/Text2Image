<script setup lang="ts">
import Form from './components/Form.vue'
import ImageCanvas from './components/ImageCanvas.vue'
</script>

<template>
  <main class="flex flex-row overflow-hidden">
    <div class="w-6/12 h-screen bg-red-50 p-10">
        <ImageCanvas />
    </div>
    <div class="w-6/12 h-screen bg-blue-gray-50 p-10 overflow-auto">
      <Form  />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

#canvas {
  border-radius: 5px;
}
</style>
