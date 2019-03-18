"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = require("./entity");
var domMap_1 = require("./components/domMap");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(stats) {
        var _this = _super.call(this) || this;
        _this.statistics = stats;
        // this.hitShadow = new MappedDOM(
        //     document.getElementById("enemy-area"), 
        //     "", 
        //     "class"
        // );
        _this.healthBar = new domMap_1.default(document.getElementById("enemyHPBar"), "100%", "style", "width");
        _this.HPDisplay = new domMap_1.default(document.getElementById("enemyHP"), _this.hp.toFixed(2), "innerHTML");
        _this.updateHPDisplay();
        return _this;
    }
    Enemy.prototype.takeDamageCallbacks = function () {
        // this.hitShadow.val = "hit";
        // setTimeout(()=>{
        //     this.hitShadow.val = "";
        // }, 100);
    };
    Enemy.prototype.updateHealthBar = function () {
        this.healthBar.val = this.statistics.health / this.statistics.max_health * 100 + "%";
    };
    return Enemy;
}(entity_1.default));
exports.default = Enemy;
