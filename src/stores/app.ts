import { ref } from 'vue'
import { defineStore } from 'pinia'
import ImageStyle from '@/models/ImageStyle'
import {watch} from 'vue'

export const useAppStore = defineStore('app', () => {
  // 标题
  const title = ref('自定义风格')
  // 背景色
  const bgColor = ref('blue')
  // 文本色
  const textColor = ref('#FFFFFF')
  // 文本
  const text = ref('你好，世界')
  // 字号
  const textSize = ref(2)
  // 图片高
  const imageHeight = ref(720)
  // 图片宽
  const imageWidth = ref(540)
  // 字体
  const font = ref('')
  // 字体
  const fileName = ref('冷淡蓝-520x720-0001')
  // 字体
  const fonts = [
    { title: '默认', font: '' },
    { title: '马善政楷体', font: 'Ma Shan Zheng' },
    { title: '站酷快乐', font: 'ZCOOL KuaiLe' },
    { title: '思源宋体', font: 'Noto Serif' }
  ]
  // 屏幕宽高
  const screenWidth = ref(0)
  const screenHeight = ref(0)

  const styles = loadImageStyle()

  // 保存图片风格
  function saveImageStyle() {
    const data = loadImageStyle()

    const style = new ImageStyle(title.value, bgColor.value, textColor.value, text.value, textSize.value, imageHeight.value, imageWidth.value, font.value)

    data.push(style.toJSON())

    localStorage.setItem('styles', JSON.stringify(data))
  }

  // 加载图片风格
  function loadImageStyle() :Array<any> {
    const s = localStorage.getItem('STYLES')
    if (s != null && s.length > 0) {
      return JSON.parse(s)
    }
    return []
  }

  function changeStyle(style: ImageStyle) {
    title.value = style.title
    bgColor.value = style.bgColor
    // textColor.value = style.textColor
    // text.value = style.text
    // textSize.value = style.textSize
    // imageHeight.value = style.imageHeight
    // imageWidth.value = style.imageWidth
    // font.value= style.font

    genFilename()
  }

  function genFilename() {
    fileName.value = `${title.value}-${imageWidth.value}x${imageHeight.value}-` + Math.floor(Math.random() * 100000)
  }

  watch([imageHeight, imageWidth], () => genFilename())

  return {
    title,
    bgColor,
    textColor,
    text,
    textSize,
    imageHeight,
    imageWidth,
    font,
    fonts,
    saveImageStyle,
    styles,
    changeStyle,
    screenWidth,
    screenHeight,
    fileName
  }
})
