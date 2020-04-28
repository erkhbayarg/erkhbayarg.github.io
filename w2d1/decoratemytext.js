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
	
	document.getElementById("iqpayBtn").onclick = function(){
		var txt = document.getElementById("iqpayTxt").value;
		var spn = document.getElementById("iqpaySpan");
		let firstMatch = txt.match(/[aeiou]/g) || 0;
		let vowel = txt.indexOf(firstMatch[0]);
		
		newStr = txt.substring(vowel) + txt.substring(0, vowel) + "ay";
		spn.innerHTML = newStr;
	}
	
	document.getElementById("malkovBtn").onclick = function(){

		
	}
}

window.onload = onLoadFunction;