
export default class ImageStyle {
  title: string
  bgColor: string
  textColor: string
  text: string
  textSize: number
  imageHeight: number
  imageWidth: number
  font: string

  constructor(
    title: string,
    bgColor: string,
    textColor: string,
    text: string,
    textSize: number,
    imageHeight: number,
    imageWidth: number,
    font: string
  ) {
    this.title = title
    this.bgColor = bgColor
    this.textColor = textColor
    this.text = text
    this.textSize = textSize
    this.imageHeight = imageHeight
    this.imageWidth = imageWidth
    this.font = font
  }

  static fromJSON(jsonStr:string) : ImageStyle {
    const styleJson = JSON.parse(jsonStr)
    const style = new ImageStyle(styleJson.title, styleJson.bgColor, styleJson.textColor, styleJson.text, styleJson.textSize, styleJson.imageHeight, styleJson.imageWidth, styleJson.font)
    return style
  }

    // Custom serialization method
    toJSON() {
      return {
        title: this.title,
        bgColor: this.bgColor,
        textColor: this.textColor,
        text: this.text,
        textSize: this.textSize,
        imageHeight: this.imageHeight,
        imageWidth: this.imageWidth,
        font: this.font
      };
    }
}