class SavingAccount extends Account{
	constructor (number) {
		super(number);
		this._interest = 0;
	}

	getInterest() {
		return this._interest;
	}

	setInterest(interest) {
		this._interest = interest;
	}

	addInterest() {
		this.deposit(this.getBalance() * (this.getInterest() / 100));
	}

	toString() {
		return `Account: ${this.getNumber()} balance: ${this.getBalance()} interest: ${this.getInterest()}`;
	}
}