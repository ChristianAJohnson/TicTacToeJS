var chessboard = ["-","-","-","-","-","-","-","-","-"]
var wins= [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

function DisplayBoard()
{
	for(let i=0;i<=8;i++)
	{
		// this was to combine the word "box" and the number from the for loop (i) so that they can be assigned unqiue id's 
		// var temp1 = "boxid"
		// var temp2 = i.toString()
		// var box = temp1.concat(temp2)

		var newbox = document.createElement("div")
		newbox.style.height = "150px"
		newbox.style.width = "150px"
		newbox.style.display = "inline-block"
		newbox.style.margin = "0px"
	

		// newbox.setAttribute("id",box) //assign each box an ID
		newbox.setAttribute("id",i) //assign each box an ID from the for loop (i)
		newbox.setAttribute("class","boxclass") // give all the boxes a class called "boxclass"

		if(i==3 || i==6	)
		{
			var newline = document.createElement("span")
			newline.innerHTML = "<br>"
			document.body.appendChild(newline)
		}
		if(i%2==0)
		{
			newbox.style.backgroundColor = "grey"
		}
		else
		{
			newbox.style.backgroundColor = "red"
		}

		document.body.appendChild(newbox)
	}
	CheckBoxes();
	// ZeroBoxes();
	
}

function CheckBoxes()
{
	// var boxid0 = document.getElementById("boxid0");
	// var boxid1 = document.getElementById("boxid1");
	// var boxid2 = document.getElementById("boxid2");
	// var boxid3 = document.getElementById("boxid3");
	// var boxid4 = document.getElementById("boxid4");
	// var boxid5 = document.getElementById("boxid5");
	// var boxid6 = document.getElementById("boxid6");
	// var boxid7 = document.getElementById("boxid7");
	// var boxid8 = document.getElementById("boxid8");


	// boxid7.addEventListener("click", function(event)
	// {
	// 	boxid7.innerHTML = "&#10006"
	// 	console.log("You clicked the 7th Box")
	// })
var boxclass = document.getElementsByClassName("boxclass")
	for(let i=0;i<=boxclass.length;i++)
	{
		boxclass[i].addEventListener("click", function()
		{
			boxclass[i].innerHTML = "&#10006"
			console.log("You clicked box number " + boxclass[i].id)
			if(chessboard[i]!= "X")
			{	
				if(chessboard[i]!= "O")
				{
				chessboard.splice(i,0,"X")
				}
			}
			console.log(chessboard)
			ChessBot();

		})
	}

}	

function ChessBot()
{
	// console.log(wins[0][0]) //this is how you access the nested arrays
	// console.log(wins[0][1]) //this is how you access the nested arrays
	// console.log(wins[0][2]) //this is how you access the nested arrays
	
	console.log(wins.length)
	console.log(wins[0].length)
	CheckWinner();

}

function ZeroBoxes()
{
	var boxclass = document.getElementsByClassName("boxclass")
	for(let i=0;i<=boxclass.length;i++)
	{
		boxclass[i].addEventListener("click", function()
		{
			boxclass[i].innerHTML = "&#9898"
			console.log("You clicked box number " + boxclass[i].id)
			if(chessboard[i]!= "O")
			{	
				if(chessboard[i]!= "X")
				{
				chessboard.splice(i,0,"O")
				}
			}
			console.log(chessboard)
			ChessBot();

		})
	}
}

function ZeroBoxes2(postion)
{
	var boxclass = document.getElementsByClassName("boxclass")
		if(chessboard[postion]!= "O")
		{	
			if(chessboard[postion]!= "X")
			{
			boxclass[postion].innerHTML = "&#9898"
			chessboard.splice(postion,0,"O")
			}
		}
		console.log(chessboard)
		// ChessBot();
}

// function CheckWinner()
{
	var total = 0

	for(let i=0;i<wins.length;i++)
	{
		for(let j=0;j<wins[i].length;j++)
		{
			console.log(wins[i][j])
			var position = wins[i][j]
			if(chessboard[position]== "X")
			{
				total += 1;
				if(total==3)
				{
					window.alert("You are a winner")
				}
			}			
		}
		console.log("|")
		total = 0
	}

}

function CheckWinner()
{
	for(let i=0;i<wins.length;i++)
	{
		var position1 = wins[i][0]  
		var position2 = wins[i][1]
		var position3 = wins[i][2]

		if(chessboard[position1]== "X" && chessboard[position2]== "X" && chessboard[position3]== "X")
		{
			window.alert("You are a winner")
		}
	}
}


function CheckChessBoard(number)
{
	for(let i=0;i<chessboard.length;i++)
	{
		console.log([i])
		console.log(chessboard[i])
	}
}

DisplayBoard();	
// ChessBot();
// ZeroBoxes2(3);
// CheckWinner();
// CheckChessBoard()























