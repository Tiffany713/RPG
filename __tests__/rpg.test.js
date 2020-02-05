import { DiceRoller } from './../src/dice-roller.js';
import { Battle } from './../src/battle.js';
import { exportAllDeclaration } from '@babel/types';

describe('DiceRoller', () => {
	test ("Dice roll results in a number between 2 -12", () => { 
		var diceRoll = new DiceRoller(4,4); //actual roll result is random. 4 and 4 are placeholders.
		expect(diceRoll.rollDice()).toEqual(true);
	});
});

describe('Battle', () => {
	test ("When two player are in battle, each turn in the battle is won by the player who rolls the highest number", () => {
		var battle = new Battle(win);
		expect(battle.battleWon()).toEqual(true);
	});
});