
var numSquares =6;
var colors =[];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1display = document.getElementsByTagName("h1")[0];
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


init();

function init() {

	setupModeButton();
	setupSquares();	
	reset();
}

function setupModeButton() {
	//mode button event listener
	for( var i = 0; i < modeButton.length; i ++) {
		modeButton[i].addEventListener("click", function () {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			}
			else{
				numSquares = 6;
			}
			reset();
		})
	}
}

function setupSquares() {
	for(var i = 0; i < square.length; i ++){
		//add event listener to squares
		square[i].addEventListener("click", function() {
	 		//grab color of squares
		 	var clickedColor = this.style.backgroundColor;
		 	//compare color to pickedColor
		 	if( clickedColor === pickedColor){
		 		changeColor(clickedColor);
		 		messageDisplay.textContent = "Correct!";
		 		h1display.style.backgroundColor = pickedColor;
		 		resetButton.textContent = "Play Again?"
		 	}
		 	else{
		 		this.style.backgroundColor = "#232323";
		 		messageDisplay.textContent = "Try Again";
		 	}
		});
	}
}


function reset() {
	//generate random no's
	colors = generateRandomColors(numSquares);
	//pick a color from selected generated no's
	pickedColor = pickColor();
	//change the h1display
	h1display.style.backgroundColor = "steelblue";
	//change the colorDisplay
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";

	resetButton.textContent = "New Colors"
	
	//change color of square boxes
	for(var i = 0; i < square.length; i ++) {
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeColor(color) {
	for(var i = 0; i < square.length; i ++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
} 

function generateRandomColors(num){
	//create an array
	var arr = [];
	//add random colors in array
	for(var i = 0; i < num; i ++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}


