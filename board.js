
//instead of arrays make array with empty string '' and += in loops


var board = document.createElement('div')

board.style.width = '400px'
board.style.height = '400px'

document.body.appendChild(board)

function black() {
var blackSq = document.createElement('div')
blackSq.style.height = '50px'
blackSq.style.width = '50px'
blackSq.style.backgroundColor = 'black'
blackSq.style.display = 'inline-block'
board.appendChild(blackSq)
}
function grey() {
var greySq = document.createElement('div')
greySq.style.height = '50px'
greySq.style.width = '50px'
greySq.style.backgroundColor = 'grey'
greySq.style.display = 'inline-block'
board.appendChild(greySq)
}

function chess2(){
  for (var h = 1; h < 5; h++) {
    for (var i = 1; i < 9; i++) {
      if (i % 2 == 0) {
        black()
      } else {
        grey()
      }
    }

    for (var j = 1; j < 9; j++) {
      if (j % 2 == 0) {
        grey()
      } else {
        black()
      }
    }
  }
}
chess2()
