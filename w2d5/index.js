/*jshint esversion: 6  */

(function() {
    "use strict";
	describe("Mocha through", () => {
		
		describe('Banned word ', () => {
			context("'This house is not nice' filtered by ('This', 'not')", function() {
				it("result is 'house is nice'", () => {
					expect('This house is not nice'.filter(['This', 'not'])).toEqual('house is nice');
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

var aa = 'This house is not nice'.filter(['This', 'not']); 
