"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MappedDOM = /** @class */ (function () {
    function MappedDOM(domElement, value, attribute, attributeDeep) {
        this.domElement = domElement;
        this.value = value;
        this.attribute = attribute;
        this.attributeDeep = attributeDeep;
    }
    Object.defineProperty(MappedDOM.prototype, "dom", {
        set: function (val) {
            this.domElement = val;
            this.updateDOMElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedDOM.prototype, "val", {
        set: function (val) {
            this.value = val;
            this.updateDOMElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MappedDOM.prototype, "attrib", {
        set: function (val) {
            this.attribute = val;
            this.updateDOMElement();
        },
        enumerable: true,
        configurable: true
    });
    MappedDOM.prototype.updateDOMElement = function () {
        if (this.attributeDeep) {
            this.domElement[this.attribute][this.attributeDeep] = this.value;
        }
        else {
            this.domElement[this.attribute] = this.value;
        }
    };
    return MappedDOM;
}());
exports.default = MappedDOM;
