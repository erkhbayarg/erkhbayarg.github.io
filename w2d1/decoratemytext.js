function onLoadFunction(){

	document.getElementById("decBtn").onclick = function(){
		alert("Hello World");
		
		setInterval(function(){
			curLength = parseInt(document.getElementById("decTxt").style.fontSize);
			if (!curLength){
				document.getElementById("decTxt").style.fontSize = "24pt";	
			} else {
				document.getElementById("decTxt").style.fontSize = 2 + curLength + "pt";
			}

		}, 500);

	}

	document.getElementById("blingCbx").onchange = function(){

		textArea = document.getElementById("decTxt");
		if(this.checked){
			textArea.className = "newStyle";
			document.body.className = "backgroundStyle";
	
		} else {
			textArea.className = "";
			document.body.className = "";
		}
	}
	
	document.getElementById("iqpayBtn").onchange = function(){

	}
	
	document.getElementById("malkovBtn").onchange = function(){

		
	}
}

window.onload = onLoadFunction;