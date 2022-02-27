let hora = 0
let min = 0
let seg = 0
let millisecond = 0

let cron

document.form_main.start.onclick = () => start()
document.form_main.pause.onclick = () => pause()
document.form_main.reset.onclick = () => reset()

function start() {
  pause()
  cron = setInterval(() => {
    timer()
  }, 10)
}

function pause() {
  clearInterval(cron)
}

function reset() {
  hora = 0
  min = 0
  seg = 0
  millisecond = 0
  document.getElementById('hora').innerText = '00'
  document.getElementById('min').innerText = '00'
  document.getElementById('seg').innerText = '00'
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0
    seg++
  }
  if (seg == 60) {
    seg = 0
    min++
  }
  if (min == 60) {
    min = 0
    hora++
  }
  document.getElementById('hora').innerText = returnData(hora)
  document.getElementById('min').innerText = returnData(min)
  document.getElementById('seg').innerText = returnData(seg)
  document.getElementById('millisecond').innerText = returnData(millisecond)
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}
