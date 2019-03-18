"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClickListener = /** @class */ (function () {
    function ClickListener(target, callback) {
        this.target = target;
        this.callback = callback;
        this.target = target;
        this.callback = callback;
        this.enableListener();
    }
    ClickListener.prototype.enableListener = function () {
        this.target.onclick = this.callback;
    };
    ClickListener.prototype.disableListener = function () {
        this.target.onclick = null;
    };
    return ClickListener;
}());
exports.default = ClickListener;
