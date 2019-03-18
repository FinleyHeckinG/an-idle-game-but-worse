"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Entity = /** @class */ (function () {
    function Entity() {
    }
    Object.defineProperty(Entity.prototype, "hp", {
        get: function () {
            return this.statistics.health;
        },
        set: function (val) {
            var prevHealth = this.hp;
            this.statistics.health = val;
            if (val < prevHealth) {
                this.takeDamageCallbacks();
            }
            if (val <= 0) {
                index_1.default.nextStage();
            }
            else {
                this.updateHPDisplay();
            }
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.updateHPDisplay = function () {
        this.HPDisplay.val = this.hp.toFixed(2);
        this.updateHealthBar();
    };
    Entity.prototype.giveAttack = function (event) {
        this.foe.hp = this.foe.hp - Math.round((event.damage * (Math.random() + 1)) * 100) / 100;
    };
    Entity.prototype.setFoeContext = function (enemy) {
        this.foe = enemy;
    };
    Entity.prototype.takeDamageCallbacks = function () { };
    Entity.prototype.updateHealthBar = function () { };
    return Entity;
}());
exports.default = Entity;
