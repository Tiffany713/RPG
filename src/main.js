import { DiceRoller } from './../src/dice-roller.js';
import { Character} from './../src/character.js';
import { Enemy } from '../src/enemy.js';
import { Space } from '../src/space.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { exportAllDeclaration } from '@babel/types';

var player = new Character();
var space = new Space();
var enemy = new Enemy();
var diceRoll = new DiceRoller();

//Start Game
$(document).ready(function() {
    $
})