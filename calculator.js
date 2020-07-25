function ewaste(){ //function ewaste
		y = document.getElementById("converter").value; //getting element by the element id
		return y;
	}

function Calculate(){ //function to calculate
	y = ewaste();

	x = document.getElementById("value1").value; //input value

	if(x == ""){
		document.getElementById("value2").value = "";//when empty
		document.getElementById("value3").value = "";//when empty
		document.getElementById("value4").value = "";//when empty
		document.getElementById("value5").value = "";//when empty
	}else{
		switch(y){
			case "CPU"://formula for returning x
				document.getElementById("value2").value = x * 3;
				document.getElementById("value3").value = x * 52;
				document.getElementById("value4").value = x * 118;
				document.getElementById("value5").value = x * 36.8;
			break;

			case "Monitor": //formula for returning x
			document.getElementById("value2").value = x * 1;
			document.getElementById("value3").value = x * 16;
			document.getElementById("value4").value = x * 37;
			document.getElementById("value5").value = x * 11.5;
			break;

			case "TV"://formula for returning x
			document.getElementById("value2").value = x * 1;
			document.getElementById("value3").value = x * 16;
			document.getElementById("value4").value = x * 37;
			document.getElementById("value5").value = x * 11.5;
			break;

			case "Laptop"://formula for returning x
			document.getElementById("value2").value = x * 2;
			document.getElementById("value3").value = x * 26;
			document.getElementById("value4").value = x * 59;
			document.getElementById("value5").value = x * 18.4;
			break;

			case "CellPhone"://formula for returning x
			document.getElementById("value2").value = x * 1;
			document.getElementById("value3").value = x * 13;
			document.getElementById("value4").value = x * 29;
			document.getElementById("value5").value = x * 9.2;
			break;
		}
	}
}
