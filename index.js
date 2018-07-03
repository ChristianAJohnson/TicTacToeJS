function test()
{

var greySq = document.createElement('div')
greySq.style.height = '150px'
greySq.style.width = '150px'
greySq.style.backgroundColor = 'grey'
greySq.style.display = 'inline-block'
document.body.appendChild(greySq)

}

function test2()
{

var redSq = document.createElement('div')
redSq.style.height = '150px'
redSq.style.width = '150px'
redSq.style.backgroundColor = 'red'
redSq.style.display = 'inline-block'
document.body.appendChild(redSq)

}

function display()
{
	for(i=0;i<9;i++)
	{
		if(i%3==0)
		{
			test()
		}
		else
		{
			test2()
		}
	}
	
}

display();

