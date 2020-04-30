/*jshint esversion: 6  */

(function() {
    "use strict";
	describe("Mocha walkthrough", () => {
		
		describe('reverseArray ', () => {
			it("returns the string reverseArray", () => {
				expect(reverseArray(["A", "B", "C"])).equal(["C", "B", "A"]);
			});
		}); 
	});	
}());
