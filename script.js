// HMTL5 Canvas API
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// global variable
let size = 10
let isPressed = false
let color = 'black'
let x
let y

// event listener
canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  // positions of mouse
  x = e.offsetX
  y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
  isPressed = false
  // positions of mouse
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    // positions of mouse
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)
    // update x and y
    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2) // Outer circle
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1) // Starting point
  ctx.lineTo(x2, y2) // End point
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}
