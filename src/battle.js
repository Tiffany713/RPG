import { Character } from "./character";
import { rollDice } from "./character.js";
import { Enemy } from "./enemy";

export function Battle(result) {
	this.result = result;
}

Battle.prototype.battleWon = function () {
	var charRes = this.result
	if (character.hp <= 0 && enemy.hp > 0) {
		return "You LOSE";		
	} else if (character.hp > 0 && enemy.hp <= 0) {
		return "You won the battle"
	}
}
