function DisplayBoard()
{
	for(i=0;i<9;i++)
	{
		// this was to combine the word "box" and the number from the for loop (i) so that they can be assigned unqiue id's 
		var temp1 = "boxid"
		var temp2 = i.toString()
		var box = temp1.concat(temp2)

		var newbox = document.createElement("div")
		newbox.style.height = "150px"
		newbox.style.width = "150px"
		newbox.style.display = "inline-block"
		newbox.setAttribute("id",box) //assign each box an ID
		newbox.setAttribute("class","boxclass") // give all the boxes a class called "boxclass"

		if(i==3 || i==6)
		{
			var newline = document.createElement("div")
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
	CheckBoxes()
	
}

DisplayBoard();	

function CheckBoxes()
{
	var boxid0 = document.getElementById("boxid0");
	var boxid1 = document.getElementById("boxid1");
	var boxid2 = document.getElementById("boxid2");
	var boxid3 = document.getElementById("boxid3");
	var boxid4 = document.getElementById("boxid4");
	var boxid5 = document.getElementById("boxid5");
	var boxid6 = document.getElementById("boxid6");
	var boxid7 = document.getElementById("boxid7");
	var boxid8 = document.getElementById("boxid8");


	boxid7.addEventListener("click", function(event)
	{
		console.log("Clicked worked")
	})
}















