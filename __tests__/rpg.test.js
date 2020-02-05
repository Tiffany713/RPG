import { DiceRoller } from './../src/dice-roller.js';
import { exportAllDeclaration } from '@babel/types';

describe('DiceRoller', () => {
    test ("Dice roll results in a number between 2 -12", () => { 
        var diceRoll = new DiceRoller(4,4); //actual roll result is random. 4 and 4 are placeholders.
        expect(diceRoll.rollDice()).toEqual(true);
    });
});