/*jshint esversion: 6  */

(function() {
    "use strict";
	describe("Lab10 mocha through", () => {
		
		describe('test banned word ', () => {
			context("'This house is not nice' filtered by ('This', 'not')", function() {
				it("result is 'house is nice'", () => {
					expect('This house is not nice'.filter(['This', 'not'])).toEqual('house is nice');
				});
			});
		}); 
		
		describe('test bubble sort ', () => {
			context("'This [5, 10, 2, 8] sorted [2, 5, 8, 10]", function() {
				it("[2, 5, 8, 10]", () => {
					expect([5, 10, 2, 8].bubbleSort()).toEqual([2, 5, 8, 10]);
				});
			});
		}); 
		
	});		
	
}());


String.prototype.filter = function (str) {
  var res = this.split(" ");
  for (let i = 0; i < str.length; i++) {    
    res = res.filter((elem) => elem != str[i]);    
  }  
  return res.join(" ");
};

// var aa = 'This house is not nice'.filter(['This', 'not']); 

Array.prototype.bubbleSort = function () {
  let temp = 0;
  let n = this.length;
  let arr = this;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < (n - i); j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j -1] = temp;
      }
    }
  }

  return arr;
}

/*var aa = [5, 10, 2, 8].bubbleSort();
for (let i = 0; i < aa.length; i++) {
  console.log(aa[i]);
}*/
