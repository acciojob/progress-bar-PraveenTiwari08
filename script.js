//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");
const nextbutton = document.querySelector("#next");
const previousbutton = document.querySelector("#prev");

let currentActive = 1;

function previous() {
	currentActive--;
	if(currentActive < 1){
		currentActive = 1;
	}
	ui_Update();
}

function next() {
	currentActive++;
	if(currentActive > circles.length){
		currentActive = circles.length;
	}
	ui_Update();
}

function ui_Update() {
	circles.forEach((circle,index)=>{
		if(index < currentActive){
			circle.classList.add("active");
		}else{
			circle.classList.remove("active");
		}
	})

	lines.forEach((line,index)=>{
		if(index < currentActive-1){
			line.classList.add("active");
		}else{
			line.classList.remove("active");
		}
	})

	if(currentActive > 1){
		previousbutton.disabled = false;
	}
}
