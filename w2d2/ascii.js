var timer = null;
var index = 0;
var speed = 150;

window.onload = function() {
	"use strict";
	const animation = document.getElementById("animation");
	animation.onchange = animationChange;
	
	const fontsize = document.getElementById("fontsize");
	fontsize.onchange = fontChange;
	
	const turbo = document.getElementById("turbo");
	turbo.onchange = speedChange;
	
	const start = document.getElementById("start");
	start.onclick = animationStart;
	
	const stop = document.getElementById("stop");
	stop.onclick = animationStop;
	/*stop.disabled = true;*/
}

function animationStart() {
	const animText = ANIMATIONS[animation.value];
	let arr = animText.split("=====\n");
	let len = arr.length;
    timer=setInterval(frames,speed, arr,len);
	stop.disabled = false;
	console.log(animText);
}

function animationStop() {
	const textArea = document.getElementById("text-area");
	textArea.value = ANIMATIONS[animation.value]
	clearInterval(timer);
	timer = null;
    index = 0;
}

function animationChange() {
	animationStop();
	const textArea = document.getElementById("text-area");
	textArea.value = ANIMATIONS[animation.value];
}

function fontChange() {
	animationStop();
	const textArea = document.getElementById("text-area");
	textArea.style.fontSize = fontsize.value;
}

function speedChange() {
	animationStop();
	if(this.checked){
        speed = 50;
    }
    else{
        speed = 250;
    }
}

function frames(arr,len){
    const textArea = document.getElementById("text-area");
    textArea.value=arr[(index%len)];
    index++;    
}