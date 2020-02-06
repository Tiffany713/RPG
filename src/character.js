import { DiceRoller } from "./dice-roller";

export function Character() {
    // this.name = name;
    // this.species = species;
    // this.job = job;
    // this.alignment = alignment;
		this.hp = 100;
}

Character.prototype.battleLost = function () {
	if (this.hp <= 0) {
		return "GAME OVER"
	} else {
		return false
	}
}

Character.prototype.turnResult = function () {
	if (DiceRoller.turnLost === "You lost this turn!") {
		this.hp =- 10
	}
}

Character.prototype.minScore = function () {
	this.hp -= 10;
	console.log(this.hp);
	return this.hp;
}


