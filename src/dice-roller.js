export function DiceRoller(humDiceRoll1, humDiceRoll2, enemDiceRoll1, enemDiceRoll2, humTurnScore, enemTurnScore) {
	this.humDiceRoll1 = Math.floor(Math.random() * 6) + 1;
	this.humDiceRoll2 = Math.floor(Math.random() * 6) + 1;
    this.enemDiceRoll1 = Math.floor(Math.random() * 6) + 1;
	this.enemDiceRoll2 = Math.floor(Math.random() * 6) + 1;
	this.humTurnScore = this.humDiceRoll1 + this.humDiceRoll2;
    this.enemTurnScore = this.enemDiceRoll1 + this.enemDiceRoll2;
}

DiceRoller.prototype.rollDice = function () {
	if ((this.humTurnScore>1 && this.humTurnScore<13) || (this.enemTurnScore>1 && this.enemTurnScore<13)) {
		return true;
	} else {
		return false; 
	}  
}

DiceRoller.prototype.turnLost = function () {
    console.log(this.humTurnScore, this.enemTurnScore);
    if (this.humTurnScore < this.enemTurnScore) {
        return "You lost this turn!"
    } else if (this.humTurnScore > this.enemTurnScore) {
        return "You won this turn!"
    } else {
        return "it's a tie, roll again!"
    }
}