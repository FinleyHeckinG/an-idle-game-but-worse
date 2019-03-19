"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var enemy_1 = require("./enemy");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.gold = 0;
        this.area = 1;
        this.addGold = function () {
            _this.gold += 1;
        };
        this.nextarea = function () {
            _this.area += 1;
            _this.generateEnemy();
        };
        this.player = new player_1.default();
        this.generateEnemy();
    }
    Game.prototype.generateEnemy = function () {
        var _this = this;
        var stats = function () {
            return {
                identifier: _this.area,
                base_damage: 1,
                max_health: 10,
                health: 10,
            };
        };
        this.currentEnemy = new enemy_1.default(stats());
        this.player.setFoeContext(this.currentEnemy);
        this.currentEnemy.setFoeContext(this.player);
    };
    return Game;
}());
var GAME = new Game();
exports.default = GAME;
