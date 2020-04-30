/*jshint esversion: 6  */

(function() {
    "use strict";
	describe("Mocha through", () => {
		
		describe('reverseArray ', () => {
			it("returns the reverseArray", () => {
				expect(reverseArray(["A", "B", "C"])).toEqual(["C", "B", "A"]);
			});
		}); 
		
		describe('arrayToList ', () => {
			it("returns the arrayToList", () => {
				expect(arrayToList([10, 20])).toEqual({value: 10, rest: {value: 20, rest: null}});
			});
		}); 

		describe('nth ', () => {
			it("returns the nth", () => {
				expect(nth({value: 10, rest: {value: 20, rest: null}}, 1)).toEqual(20);
			});
		}); 		
		
	});		
	
}());
