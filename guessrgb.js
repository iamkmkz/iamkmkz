var numSquares = 6;

var colors = colorsArray(numSquares);

// var colorsEasy = colorsEasyArray(3);

var squares = document.querySelectorAll(".square");

var randomColor = getRandomColor();

var guessResultDisplay = document.getElementById("guessResult");

var randomColorDisplay = document.querySelector(".randomColor");

var h1 = document.querySelector("h1");

// var easyBtn = document.querySelector("#easyBtn");

// var hardBtn = document.querySelector("#hardBtn");

var modeBtns = document.querySelectorAll(".mode");


init();

function init() {
	//mode buttons event listeners
	setupModeBtns();

	//squares event listeners
	setupSquares();

	reset();

}

function setupModeBtns() {
	for(var i = 0; i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click", function() {
	modeBtns[0].classList.remove("selectedLevel");
	modeBtns[1].classList.remove("selectedLevel");
	this.classList.add("selectedLevel");
	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	reset();
	})
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;


	if (clickedColor === randomColor) {
		guessResultDisplay.textContent = "Correct!";
		guessResultDisplay.style.color = "forestgreen";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		document.querySelector("#newColors").textContent = "Play again?";

	}	else {
		this.style.backgroundColor = "#232323";
		guessResultDisplay.textContent = "Try again!";
		guessResultDisplay.style.color = "firebrick";
	}
	});
	}
}

function reset() {
	//generate colors array
	colors = colorsArray(numSquares);
	//pick and display random color
	randomColor = getRandomColor();
	randomColorDisplay.textContent = randomColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	document.querySelector("#newColors").textContent = "New colors";
	document.querySelector("#guessResult").textContent = "";
}


var newColorsButton = document.querySelector("#newColors");

newColorsButton.addEventListener("click", function() {
	reset()
});


function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//change each square's color
	squares[i].style.backgroundColor = color;		
	}
}

function getRandomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function colorsArray(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//generate color and add to array
		arr.push(colorForArray());
		}
	//return that array
	return arr;
}

function colorForArray() {
	//pick a "red" 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}