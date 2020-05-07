class Bank {
	constructor() {
		this._accounts = [];
		this.number = 0;
	}
	
	getAccounts() {
		return this._accounts;
	}	
	
	addAccount(number) {    
		this.getAccounts().push(new Account(this.getMax() + 1));	
		return this.getAccounts().length;
	}
	
	addSavingsAccount(interest) {
		const account = new SavingAccount(this.getMax() + 1);
		account.setInterest(interest);
		this.getAccounts().push(account);
		return this.getAccounts().length;
	}
	
	addCheckingAccount(overdraft) {
		const account = new CheckingAccount(this.getMax() + 1);
		account.setOverdraft(overdraft);
		this.getAccounts().push(account);
		return this.getAccounts().length;
	}
	
	closeAccount(number) {
		const account = this.getAccounts().findIndex(account => account.getNumber() === number);
		//delete this.getAccounts()[account];
		this.getAccounts().splice(account, 1);
	}
	
	accountReport() {
		return this.getAccounts().map(account => account.toString());
	}

	getMax() {
		let maxNumber = 0;
		for (let i = 0; i < this.getAccounts().length; i++) {
		  if (this.getAccounts()[i].getNumber() > maxNumber) {
			maxNumber = this.getAccounts()[i].getNumber();
		  }      
		}
		
		return maxNumber;
	}
}