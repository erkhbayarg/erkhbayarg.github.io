/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
	if (expected === found) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED.  Expected " + expected + " found " + found;
	}
}

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionArrayTest(expected, found) {
	if (expected.toString == found.toString) {
		return "TEST SUCCEEDED";
	} else {
		return "TEST FAILED.  Expected " + expected + " found " + found;
	}
}


/* max returns the maximum of 2 arguments */
function max(a, b) {			
	if (a > b) {
		return a;
	} else {
		return b;
	};
}
console.log("Q2. Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
	var ret = a;
	m = [a,b,c];
	for (i = 1; i < m.length; i++) {
		if (m[i] > ret) {
			ret = m[i]; 
		}
	}
	
	return ret;
}

console.log("Q3. Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Q3. Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* q4 is vowel*/
function isVowel(c) {
	if (c.length > 1) {
		return false;
	}
	
	return ['a', 'o', 'y', 'e', 'i', 'u'].indexOf(c.toLowerCase()) !== -1;
}

console.log("Q4. Expected output of isVowel(a) is true  " + myFunctionTest(true, isVowel('a')));
console.log("Q4. Expected output of isVowel(b) is false  " + myFunctionTest(false, isVowel('b')));
console.log("Q4. Expected output of isVowel(yy) is false  " + myFunctionTest(true, isVowel('yy')));

/* q5 sum and multiple*/
function sum (a) {
	sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}

function multiple (a) {
	let  mul = 1;
	for (let i = 0; i < a.length; i++) {
		mul *= a[i];
	}
	
	return mul;
}
var x = [2, 4, 6];
console.log("Q5. Expected output of sum(2, 4, 6) is 12  " + myFunctionTest(12, sum(x)));
console.log("Q5. Expected output of multiple(2, 4, 6) is 48  " + myFunctionTest(48, multiple(x)));

/*q6 reverse*/
function reserve(a) {
	let res = "";
	
	for (let i = a.length - 1; i >= 0; i--) {
		res = res + a.charAt(i);
	}
	
	return res;
	//return a.split("").reverse().join("");
}
console.log("Q6. Expected output of reserve(jag testar) is ratset gaj  " + myFunctionTest("ratset gaj", reserve("jag testar")));
console.log("Q6. Expected output of reserve(test) is ratset tset  " + myFunctionTest("test", reserve("test")));

/*Q7. findLongestWord*/
function longestWord(a) {
	let longest = a[0];
	for (let i = a.length - 1; i >=0; i--) {
		if (a[i].length > longest.length) {
			longest = a[i];
		}
	}
	
	return longest;
}

var x = ["aa", "bbb", "cccc", "d"];
console.log("Q7. Expected output of longestWord(aa, bbb, cccc, d) is cccc  " + myFunctionTest("cccc", longestWord(x)));
console.log("Q7. Expected output of longestWord(aa, bbb, cccc, d) is d  " + myFunctionTest("d", longestWord(x)));

/*Q8.  */
function filterLongWords(a , b){
	var toReturn = [];

	for (var i = a.length - 1; i >= 0; i--) {
		if (a[i].length > b){
			toReturn.push(a[i]);
		}
	}
	return toReturn;		
}

var x = ["aa", "bbb", "cccc", "d"];
var x1 = ["cccc", "bbb"];
console.log("Q8. Expected output of longestWord(aa, bbb, cccc, d) is cccc, bbb  " + myFunctionArrayTest(x1, filterLongWords(x, 2)));

/*Q9. map/filter/reduce*/
function array1(a) {
	return a.map(function(elem, i, array) {
		return elem * 10;
	});
}

function array2(a) {
	return a.filter(function(elem, i, array){
		return elem === 3;
	});
}

function array3(a) {
	return a.reduce(function(prevValue, elem, i, array){
		return prevValue+ elem;
	}, 0);
}

var x = [2, 4, 6];
console.log("Q9 multiply each element by 10 :  " + array1(x));
console.log("Q9 all elements equal to 3 : " + array2(x));
console.log("Q9 product of all elements : " + array3(x));