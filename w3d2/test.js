/*jshint esversion: 6  */

(function() {
    "use strict";
	describe("Mocha w3d2", () => {		
		describe('Bank Saving Account', () => {			
			it("check Interest ", () => {
				let bank1 = new Bank();
				bank1.addAccount();
				bank1.addSavingsAccount(10);
				bank1.getAccounts()[1].deposit(100);
				bank1.getAccounts()[1].addInterest();
				expect(bank1.getAccounts()[1].getBalance()).toEqual(110);
			});
		}); 	
		
		describe('Bank Checking Account', () => {			
			it("check Overdraft  ", () => {
				let bank2 = new Bank();
				//bank2.addAccount();
				bank2.addCheckingAccount(100);
				bank2.getAccounts()[0].withdraw(50);
				expect(bank2.getAccounts()[0].getBalance()).toEqual(-50);
			});
		});
		
		describe('Bank Close Account', () => {			
			it("check close  ", () => {
				let bank3 = new Bank();
				bank3.addAccount();
				bank3.addAccount();
				bank3.addAccount();
				bank3.addAccount();
				bank3.addAccount();
				bank3.closeAccount(3)
				expect(bank3.getAccounts().length).toEqual(4);
			});
		});
		
	});		
	
}());
