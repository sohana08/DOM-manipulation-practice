var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var fDisplay=document.querySelector("#fDisplay");
var sDisplay=document.querySelector("#sDisplay");
var score1=0;
var score2=0;

var gameOver=false;
var win=5;

b1.addEventListener("click",function()
{
	if(!gameOver)
	{
		score1++;
	fDisplay.textContent=score1;
	}
	if(score1===win)
	{
		fDisplay.classList.add("winner");
		gameOver=true;
	}

});

b2.addEventListener("click",function()
{
	if(!gameOver)
	{
		score2++;
	sDisplay.textContent=score2;
	}
	if(score2===win)
	{
		sDisplay.classList.add("winner");
		gameOver=true;
	}

});

// reset functions
var reset=document.getElementById("reset");
function reset()
{
	score1=0;
	score2=0;
	fDisplay.textContent=score1;
	sDisplay.textContent=score2;
	fDisplay.classList.remove("winner");
	sDisplay.classList.remove("winner");
	gameOver=false;

}

reset.addEventListener("click",function()
{
	score1=0;
	score2=0;
	fDisplay.textContent=score1;
	sDisplay.textContent=score2;
	fDisplay.classList.remove("winner");
	sDisplay.classList.remove("winner");
	gameOver=false;
});

var numInput=document.querySelector("input");
var winningDisplay=document.querySelector("p span");
numInput.addEventListener("change",function()
{
	winningDisplay.textContent=numInput.value;
	win=Number(numInput.value);
	reset();
})