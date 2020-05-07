function reverseArray(arr) {
	let result = [];			
	for (let i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}
	
	return result;
	
	/*debugger*/	
}

function arrayToList(arr) {
	let result = null;
	for(let i = 0; i < arr.length; i++) {
		let next = result;
		result = {value: arr[arr.length - 1 - i], rest: next};
	}

	return result;
	/*debugger*/	
}

function nth(arr, index) {
	let result;
	for (let i = 0; i <= index; i++) {
		result = arr.value;
		arr = arr.rest;
	}
	return result;
}
