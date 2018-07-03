var board = document.createElement("div")
board.style.width="800px"
board.style.height="700px"
board.style.backgroundColor="yellow"
document.body.appendChild(board)

function grey()
{

var greySq = document.createElement("div")
greySq.style.height = "50px"
greySq.style.width = "50px"
greySq.style.backgroundColor = "grey"
greySq.style.display = "inline-block"
board.body.appendChild(greySq)

}

function red()
{

var redSq = document.createElement("div")
redSq.style.height = "50px"
redSq.style.width = "50px"
redSq.style.backgroundColor = "red"
redSq.style.display = "inline-block"
board.body.appendChild(redSq)
}

function displayBoard()
{
	for(i=0;i<9;i++)
	{
		if(i==3 || i==6)
		{
			var newline = document.createElement("div")
			newline.innerHTML = "<br>"
			board.body.appendChild(newline)
		}
		if(i%2==0)
		{
			grey()
		}
		else
		{
			red()

		}
	}
	
}

// displayBoard();

