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
var clickListener_1 = require("./components/clickListener");
var attackButton = document.getElementById("click");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.level = 1;
        //Defaults
        _this.statistics = {
            identifier: "Player",
            base_damage: 1,
            max_health: 100,
            health: 100,
            exp: 0,
            exp_to_next: 20,
        };
        new clickListener_1.default(attackButton, function () {
            _this.giveAttack({
                damage: _this.statistics.base_damage
            });
        });
        return _this;
    }
    return Player;
}(entity_1.default));
exports.default = Player;
