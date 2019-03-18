/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/clickListener.ts":
/*!*****************************************!*\
  !*** ./src/components/clickListener.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ClickListener = /** @class */ (function () {\r\n    function ClickListener(target, callback) {\r\n        this.target = target;\r\n        this.callback = callback;\r\n        this.target = target;\r\n        this.callback = callback;\r\n        this.enableListener();\r\n    }\r\n    ClickListener.prototype.enableListener = function () {\r\n        this.target.onclick = this.callback;\r\n    };\r\n    ClickListener.prototype.disableListener = function () {\r\n        this.target.onclick = null;\r\n    };\r\n    return ClickListener;\r\n}());\r\nexports.default = ClickListener;\r\n\n\n//# sourceURL=webpack:///./src/components/clickListener.ts?");

/***/ }),

/***/ "./src/components/domMap.ts":
/*!**********************************!*\
  !*** ./src/components/domMap.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MappedDOM = /** @class */ (function () {\r\n    function MappedDOM(domElement, value, attribute, attributeDeep) {\r\n        this.domElement = domElement;\r\n        this.value = value;\r\n        this.attribute = attribute;\r\n        this.attributeDeep = attributeDeep;\r\n    }\r\n    Object.defineProperty(MappedDOM.prototype, \"dom\", {\r\n        set: function (val) {\r\n            this.domElement = val;\r\n            this.updateDOMElement();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(MappedDOM.prototype, \"val\", {\r\n        set: function (val) {\r\n            this.value = val;\r\n            this.updateDOMElement();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(MappedDOM.prototype, \"attrib\", {\r\n        set: function (val) {\r\n            this.attribute = val;\r\n            this.updateDOMElement();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    MappedDOM.prototype.updateDOMElement = function () {\r\n        if (this.attributeDeep) {\r\n            this.domElement[this.attribute][this.attributeDeep] = this.value;\r\n        }\r\n        else {\r\n            this.domElement[this.attribute] = this.value;\r\n        }\r\n    };\r\n    return MappedDOM;\r\n}());\r\nexports.default = MappedDOM;\r\n\n\n//# sourceURL=webpack:///./src/components/domMap.ts?");

/***/ }),

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar entity_1 = __webpack_require__(/*! ./entity */ \"./src/entity.ts\");\r\nvar domMap_1 = __webpack_require__(/*! ./components/domMap */ \"./src/components/domMap.ts\");\r\nvar Enemy = /** @class */ (function (_super) {\r\n    __extends(Enemy, _super);\r\n    function Enemy(stats) {\r\n        var _this = _super.call(this) || this;\r\n        _this.statistics = stats;\r\n        // this.hitShadow = new MappedDOM(\r\n        //     document.getElementById(\"enemy-area\"), \r\n        //     \"\", \r\n        //     \"class\"\r\n        // );\r\n        _this.healthBar = new domMap_1.default(document.getElementById(\"enemyHPBar\"), \"100%\", \"style\", \"width\");\r\n        _this.HPDisplay = new domMap_1.default(document.getElementById(\"enemyHP\"), _this.hp.toFixed(2), \"innerHTML\");\r\n        _this.updateHPDisplay();\r\n        return _this;\r\n    }\r\n    Enemy.prototype.takeDamageCallbacks = function () {\r\n        // this.hitShadow.val = \"hit\";\r\n        // setTimeout(()=>{\r\n        //     this.hitShadow.val = \"\";\r\n        // }, 100);\r\n    };\r\n    Enemy.prototype.updateHealthBar = function () {\r\n        this.healthBar.val = this.statistics.health / this.statistics.max_health * 100 + \"%\";\r\n    };\r\n    return Enemy;\r\n}(entity_1.default));\r\nexports.default = Enemy;\r\n\n\n//# sourceURL=webpack:///./src/enemy.ts?");

/***/ }),

/***/ "./src/entity.ts":
/*!***********************!*\
  !*** ./src/entity.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/index.ts\");\r\nvar Entity = /** @class */ (function () {\r\n    function Entity() {\r\n    }\r\n    Object.defineProperty(Entity.prototype, \"hp\", {\r\n        get: function () {\r\n            return this.statistics.health;\r\n        },\r\n        set: function (val) {\r\n            var prevHealth = this.hp;\r\n            this.statistics.health = val;\r\n            if (val < prevHealth) {\r\n                this.takeDamageCallbacks();\r\n            }\r\n            if (val <= 0) {\r\n                index_1.default.nextStage();\r\n            }\r\n            else {\r\n                this.updateHPDisplay();\r\n            }\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Entity.prototype.updateHPDisplay = function () {\r\n        this.HPDisplay.val = this.hp.toFixed(2);\r\n        this.updateHealthBar();\r\n    };\r\n    Entity.prototype.giveAttack = function (event) {\r\n        this.foe.hp = this.foe.hp - Math.round((event.damage * (Math.random() + 1)) * 100) / 100;\r\n    };\r\n    Entity.prototype.setFoeContext = function (enemy) {\r\n        this.foe = enemy;\r\n    };\r\n    Entity.prototype.takeDamageCallbacks = function () { };\r\n    Entity.prototype.updateHealthBar = function () { };\r\n    return Entity;\r\n}());\r\nexports.default = Entity;\r\n\n\n//# sourceURL=webpack:///./src/entity.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\r\nvar enemy_1 = __webpack_require__(/*! ./enemy */ \"./src/enemy.ts\");\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        var _this = this;\r\n        this.gold = 0;\r\n        this.stage = 1;\r\n        this.addGold = function () {\r\n            _this.gold += 1;\r\n        };\r\n        this.nextStage = function () {\r\n            _this.stage += 1;\r\n            _this.generateEnemy();\r\n        };\r\n        this.player = new player_1.default();\r\n        this.generateEnemy();\r\n    }\r\n    Game.prototype.generateEnemy = function () {\r\n        var _this = this;\r\n        var stats = function () {\r\n            return {\r\n                identifier: _this.stage,\r\n                base_damage: 1,\r\n                max_health: 10,\r\n                health: 10,\r\n            };\r\n        };\r\n        this.currentEnemy = new enemy_1.default(stats());\r\n        this.player.setFoeContext(this.currentEnemy);\r\n        this.currentEnemy.setFoeContext(this.player);\r\n    };\r\n    return Game;\r\n}());\r\nvar GAME = new Game();\r\nexports.default = GAME;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar entity_1 = __webpack_require__(/*! ./entity */ \"./src/entity.ts\");\r\nvar clickListener_1 = __webpack_require__(/*! ./components/clickListener */ \"./src/components/clickListener.ts\");\r\nvar attackButton = document.getElementById(\"click\");\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    function Player() {\r\n        var _this = _super.call(this) || this;\r\n        _this.level = 1;\r\n        //Defaults\r\n        _this.statistics = {\r\n            identifier: \"Player\",\r\n            base_damage: 1,\r\n            max_health: 100,\r\n            health: 100,\r\n            exp: 0,\r\n            exp_to_next: 20,\r\n        };\r\n        new clickListener_1.default(attackButton, function () {\r\n            _this.giveAttack({\r\n                damage: _this.statistics.base_damage\r\n            });\r\n        });\r\n        return _this;\r\n    }\r\n    return Player;\r\n}(entity_1.default));\r\nexports.default = Player;\r\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ })

/******/ });