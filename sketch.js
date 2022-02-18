/*global abs, color, copy, createCanvas, point, stroke*/

const config = {
  colors: ['blue', '#dfdfdf'],
  boundary: 97,
  divider: 997,
  exponent: 3,
  height: 1080,
  width: 1920,
}

let drawCounter = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  drawCounter++

  copy(0, 0, config.width, config.height, 0, 1, config.width, config.height)

  for (let horizontalCounter = config.width; --horizontalCounter; horizontalCounter > 0) {
    let strokeColor = getRandomColor(horizontalCounter, drawCounter)
    stroke(strokeColor)
    point(horizontalCounter, 0)
  }
}

function getRandomColor(horizontalCounter, drawCounter) {
  let base, colorDifferentiator, minus, plus, strokeColor

  minus = horizontalCounter - drawCounter
  plus = horizontalCounter + drawCounter

  base = minus ^ plus

  colorDifferentiator = abs(drawCounter + Math.pow(base, config.exponent))

  strokeColor = 1
  if (colorDifferentiator % config.divider < config.boundary) {
    strokeColor = 0
  }

  return color(config.colors[strokeColor])
}