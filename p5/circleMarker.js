export const setup = p => {
  p.setup = _ => {
    const canvas = p.createCanvas(500, 500)
    canvas.parent('p5Canvas')
    for (let i = 0; i < 500; i++) {
      p.fill(p.random(0, 256), p.random(0, 256), p.random(0, 256))
      p.ellipse(
        p.random(0, p.width),
        p.random(0, p.height),
        p.random(100),
        p.random(100)
      )
    }
  }
}
