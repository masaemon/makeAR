<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-3">
          makeAR
        </h1>
        <p class="subtitle is-5">
          できたマーカーを見てみよう！
        </p>
      </div>
    </section>  
    <section class="section">
      <div class="container">
        <div ref="canvas" />
      </div>
    </section>
  </div>
</template>

<script>
import P5 from 'p5'
export default {
  data() {
    return {
      script: null,
      canvas: null,
      ps: null
    }
  },
  mounted() {
    this.script = p => {
      p.setup = _ => {
        this.canvas = p.createCanvas(250, 250)
        this.canvas.parent(this.$refs.canvas)
        p.background(255)
        for (let i = 0; i < 500; i++) {
          p.fill(p.random(0, 256), p.random(0, 256), p.random(0, 256))
          p.ellipse(
            p.random(0, p.width),
            p.random(0, p.height),
            p.random(50),
            p.random(50)
          )
        }
      }
    }
    this.ps = new P5(this.script)
  }
}
</script>
