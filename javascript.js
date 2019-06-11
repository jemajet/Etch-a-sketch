console.log("hey");

let fillColor = "black";

function randomInt(n) {
	return Math.floor(Math.random()*n);
}

function createGrids(gridsPerSide) {
	container = document.querySelector("#container");
	// container.style.backgroundColor = "lightpink";
	container.style.gridTemplateColumns = gridsPerSide;
	container.style.gridTemplateRows = gridsPerSide;
	for (let i = 1; i <= gridsPerSide; i++) {
		for (let j = 1; j <= gridsPerSide; j++) {
			let newGrid = document.createElement("div");
			newGrid.classList.add("grid");
			newGrid.style.gridColumnStart = i;
			newGrid.style.gridRowStart = j;
			newGrid.style.gridColumnEnd = "span 1";
			newGrid.style.gridRowEnd = "span 1";
			newGrid.addEventListener("mouseover", function() {
				if (fillColor === "random") {
					red = randomInt(256).toString(16);
					green = randomInt(256).toString(16);
					blue = randomInt(256).toString(16);
					newGrid.style.backgroundColor = "#" + red + green + blue;
				} else if (fillColor === "shade") {
					newGrid.classList.add("blackFill");
				} else {
					newGrid.classList.add("blackFill");
				}
			});
			container.appendChild(newGrid);
		}
	}
}

function reset() {
	container = document.querySelector("#container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
	let gridsPerSide = prompt("How many grids per side?");
	createGrids(gridsPerSide);
}


createGrids(16);
createGrids(14);
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

let blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", function() {
	fillColor = "black";
});

let randomBtn = document.querySelector("#random");
randomBtn.addEventListener("click", function() {
	fillColor = "random";
});