<template> 
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-3">
          makeAR
        </h1>
        <p class="subtitle is-5">
          ARマーカーがでるよ
        </p>
      </div>
    </section>  
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div id="p5Canvas" ref="canvas" />
          </div>
        </div>
        <a download class="button" ref="download" @click="storePicture">
          保存する
        </a>
        <a href="/" class="button">リロード</a>
      </div>
    </section>
    <section class="section" />
  </div>
</template>

<script>
import P5 from 'p5'
import * as circleMarker from '../p5/circleMarker'
export default {
  data() {
    return {
      marker: null,
      markerStatus: {
        markeramounts: 0,
        markerShapeType: '',
        markerStyleType: ''
      }
    }
  },
  mounted() {
    this.marker = new P5(circleMarker.setup)
  },
  methods: {
    storePicture() {
      const canvas = this.$refs.canvas.childNodes[0]
      const picture = canvas.toDataURL('image/jpeg')
      this.$refs.download.href = picture
    }
  }
}
</script>
<style lang="scss" scoped>
.control {
  margin-bottom: 5%;
}
</style>
