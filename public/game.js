var num=6;
var colors= generatecolor(num);
var squares = document.querySelectorAll(".square");
var colour = document.querySelector("#colour");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#Easy");
var hard= document.querySelector("#Hard");
var pickedcolor=pickcolor();



easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	num=3;
	colors= generatecolor(num);
	pickedcolor=pickcolor();
	colour.innerHTML=pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i])
			squares[i].style.backgroundColor= colors[i];
		else
			squares[i].style.display="none";
	}
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	num=6;
	colors= generatecolor(num);
	pickedcolor=pickcolor();
	colour.innerHTML=pickedcolor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor= colors[i];
			squares[i].style.display="block";
		}
});


reset.addEventListener("click",function(){
	h1.style.backgroundColor="rgb(64,9,96)";
	reset.innerHTML="New Colors";
	msg.innerHTML="";
	colors= generatecolor(num);
	pickedcolor=pickcolor();
	colour.innerHTML=pickedcolor;
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	}
});


colour.innerHTML=pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var colourpicked = this.style.backgroundColor;
		if(colourpicked===pickedcolor){
			msg.innerHTML="Correct";
			changecolor(pickedcolor);
			h1.style.backgroundColor=pickedcolor;
			reset.innerHTML="Play Again?";
		}
		else{
			this.style.backgroundColor="white";
			msg.innerHTML="Try Again";
			h1.style.backgroundColor="rgb(64,9,96)";
		}
			
	});
}

function changecolor(color){
	for(var j=0;j<squares.length;j++){
		squares[j].style.backgroundColor=color;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatecolor(num){
	var ar=[];
	for(var i=0;i<num;i++){
		ar.push(choosecolor());
	}
	return ar;
}

function choosecolor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}