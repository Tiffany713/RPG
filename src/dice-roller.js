export function DiceRoller(diceRoll1, diceRoll2) {
    this.diceRoll1 = diceRoll1;
    this.diceRoll2 = diceRoll2;
}

DiceRoller.prototype.rollDice = function () {
	this.diceRoll1 = Math.floor(Math.random() * 6) + 1;
	this.diceRoll2 = Math.floor(Math.random() * 6) + 1;
	var diceTotal = this.diceRoll1 + this.diceRoll2;
	if (diceTotal>1 && diceTotal<13) {
		return true;
	} else {
		return false; 
	}  
}