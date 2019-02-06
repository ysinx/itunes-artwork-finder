<template>
  <transition name="fade">
    <div id="download" v-if="selectedCard > 0">
      <button v-if="!isLoading" @click.self.stop="download()"></button>
      <button v-else disabled></button>
      <button v-if="!isLoading" @click.self.stop="$emit('clearSelectedCard')"></button>
      <button v-else disabled></button>
    </div>
  </transition>
</template>
<script>
import axios from 'axios'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export default {
  props: ['itunesResult', 'selectedCard', 'isLoading'],
  data() {
    return {
      isReady: false
    }
  },
  methods: {
    getFile(url) {
      this.isReady = true
      this.$nuxt.$loading.start()
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url,
          responseType: 'arraybuffer'
        })
          .then(data => {
            resolve(data.data)
          })
          .catch(error => {
            this.isReady = false
            this.$nuxt.$loading.finish()
            reject()
            alert('数据读取失败，请重试')
            return
          })
      })
    },
    download() {
      let arr = []
      let readyToZip = []
      let zip = new JSZip()

      this.$props.itunesResult.map(item => {
        if (item.ratio === 0) {
          arr.push(item.artworkUrl512)
        } else if (item.ratio === 1) {
          arr.push(item.artworkUrl1024)
        } else if (item.ratio === 2) {
          arr.push(item.artworkUrl9600)
        }
      })

      if (arr.length <= 0) return
      if (arr.length > 1) {
        try {
          const isFileSaverSupported = !!new Blob()
          if (!isFileSaverSupported) {
            alert('当前浏览器环境不支持文件下载')
            return
          }
        } catch (e) {}

        // API: 读取待压缩文件并打包
        arr.map(item => {
          const image = this.getFile(item).then(result => {
            zip.file(new Date().getTime() + '.png', result, { binary: true })
          })
          readyToZip.push(image)
        })

        // 逻辑: 文件打包完毕并触发下载
        Promise.all(readyToZip).then(() => {
          this.isReady = false
          this.$nuxt.$loading.finish()
          zip.generateAsync({ type: 'blob' }).then(content => {
            saveAs(content, 'artwork.zip')
          })
        })

        return
      }
      window.open(arr[0])
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

div#download {
  display: block;
  position: fixed;
  right: 30px;
  bottom: 30px;
  margin: auto;
  font-size: 0;
  text-align: center;
  z-index: 8;
}

button {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  width: 50px;
  background: url('~static/confirm.svg') #fff center no-repeat;
  background-size: 30px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px;
}
button + button {
  margin-left: 15px;
  background-image: url('~static/clear.svg');
}
button:disabled {
  cursor: not-allowed;
}
</style>
