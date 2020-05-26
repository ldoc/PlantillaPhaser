import Phaser, { Scene } from 'phaser';
import {Menu} from './Escenas/menu.js';
import {Juego} from './Escenas/juego.js';

var config = {
    type: Phaser.AUTO,
    width: 885,
    height: 500,
    scene: [Juego],
    physics: {
        default: "matter",
        matter: {
            debug: true
        }
    },
};

var game = new Phaser.Game(config);
