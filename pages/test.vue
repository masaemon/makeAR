<template>
  <div style="margin-top: 72px;">
    <b-container>
      <div ref="canvas" />
      <b-btn>Change color</b-btn>
    </b-container>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      script: null,
      ps: null,
      x: 0,
      y: 0,
      canvas: null
    }
  },
  mounted() {
    console.log('aaa')
    this.script = p => {
      this.x = 100
      this.y = 100

      p.setup = _ => {
        this.canvas = p.createCanvas(600, 420)
        this.canvas.parent(this.$refs.canvas)
        p.frameRate(60)
      }

      p.draw = _ => {
        p.background(0)
        p.fill(255)
        p.rect(this.x, this.y, 50, 50)
      }
    }
    const P5 = require('p5')
    this.ps = new P5(this.script)
  }
}
</script>
