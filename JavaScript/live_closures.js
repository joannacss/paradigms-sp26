let counter = 1;

function nextOddNumber(){
	let output = counter;
	counter = counter + 2
	return output;
}




// DEMO: how to use closures to solve this problem?
function nextOddNumberGenerator(){
	let innerCounter = 1;
	// funciton?
	return () => {
		let output = innerCounter;
		innerCounter += 2;
		return output;
	}
}


function userFunction1(generator){
	console.log(`userFunction1 ${generator()}`) // 1
	console.log(`userFunction1 ${generator()}`) // 3
}

function userFunction2(generator){
	console.log(`userFunction2 ${generator()}`) // 1
	console.log(`userFunction2 ${generator()}`) // 3
}

let generator1 = nextOddNumberGenerator();
let generator2 = nextOddNumberGenerator();

userFunction1(generator1)
userFunction2(generator2)
console.log(generator2()) // ?




