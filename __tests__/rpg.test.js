import { DiceRoller } from './../src/dice-roller.js';
import { Character} from './../src/character.js';
import { exportAllDeclaration } from '@babel/types';
import { Enemy } from '../src/enemy.js';
import { Space } from '../src/space.js';

describe('DiceRoller', () => {
	test ("Dice roll results in a number between 2 -12", () => { 
		var charRoll = new DiceRoller(4,4,6,6,8,12); //actual roll result is random. 4 and 4 are placeholders.
		expect(charRoll.rollDice()).toEqual(true);
	});
	test("Whichever player loses the turn also loses 10 hp", () => {
		var turn = new DiceRoller();
		var enemy = new Enemy();
		var human = new Character()
		if (turn.turnLost() === "Human wins!") {
			expect(enemy.minScore()).toEqual(90);
		}
		if (turn.turnLost() === "Enemy wins!") {
			expect(human.minScore()).toEqual(90);
		}
	});
});

describe('Character', () => {
	test ("When two player are in battle, each turn in the battle is won by the player who rolls the highest number", () => {
		var character = new Character();
		character.hp = 0;
		expect(character.battleLost()).toEqual("GAME OVER");
	});
});

describe('Space', () => {
	test('space has a value of 0, 1 or 2', () => {
		var space = new Space();
		expect(space.assVal()).toEqual(true);
	}); 
});