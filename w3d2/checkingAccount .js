class CheckingAccount extends Account{
	constructor(number) {
		super(number);
		this._overdraft  = 0; 
	}
	
	setOverdraft(overdraft) {
		this._overdraft = overdraft; 		
	}
	
	getOverdraft() {
		return this._overdraft;
	}
	
	withdraw(amount) {
		if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
		if (this.getBalance() - amount > -this.getOverdraft()) {			
			this._balance -= amount;
		} else {
			throw new RangeError("Negative balance");
		}
	}
	
	toString() {
		return `Account: ${this.getNumber()} balance: ${this.getBalance()} overDraft: ${this.getOverdraft()}`;
	}
}