function toCelsius(){
	let inputElement = document.getElementById("temperature");
	let f = Number(inputElement.value);
	let c = (5/9) * (f - 32) ;
	document.getElementById("result").innerText = c;
}