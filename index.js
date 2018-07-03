function test()
{

var greySq = document.createElement('div')
greySq.style.height = '150px'
greySq.style.width = '150px'
greySq.style.backgroundColor = 'grey'
greySq.style.display = 'inline-block'
document.body.appendChild(greySq)

}

function display()
{
	for(i=0;i<7;i++)
	{
		test();
		if(i%3==0)
		{
		document.body.appendChild("<br>")
		}
	}
	
}

display();

