// import {}
type Options = {
  el: string
}
export default function (options:Options):Promise<{baseUrl:string}>{
  const base64 = (el:HTMLImageElement) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.height = el.height
    canvas.width = el.width
    ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL('image/png')
  }
  return new Promise(resolve =>{
    onMounted(() => {
      let img:HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
      console.log(img)
      img.onload = () => {
        resolve({
          baseUrl: base64(img)
        })
      }
    })
  })
}

