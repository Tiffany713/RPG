import { DiceRoller } from './../src/dice-roller.js';
import { Character} from './../src/character.js';
import { exportAllDeclaration } from '@babel/types';

describe('DiceRoller', () => {
	test ("Dice roll results in a number between 2 -12", () => { 
		var charRoll = new DiceRoller(4,4,6,6,8,12); //actual roll result is random. 4 and 4 are placeholders.
		expect(charRoll.rollDice()).toEqual(true);
	});
	test("The player with the highest turn score wins the turn", () => {
		var loser = new DiceRoller(4,4,6,6,8,12);
		expect(loser.turnLost()).toEqual("check consolelog for scores")
	});
});

describe('Character', () => {
	test ("When two player are in battle, each turn in the battle is won by the player who rolls the highest number", () => {
		var character = new Character(20);
		expect(character.battleLost()).toEqual(false);
	});
});