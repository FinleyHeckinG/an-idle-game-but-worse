!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),r=n(5),i=n(7),a=n(8),s=new(function(){function e(){var e=this;this.gold=0,this.area=1,this.areaTotal=1,this.floor=1,this.addGold=function(){return e.gold+=i.StatsGen.generateGold(e.areaTotal)},this.nextarea=function(){e.addGold(),e.area%20==0?(e.generateEnemy(!0),e.floor++,e.area=1):(e.generateEnemy(!1),e.area++,e.areaTotal++)},this.player=new o.default,this.generateEnemy(),this.userDragManager=new a.default}return e.prototype.generateEnemy=function(e){void 0===e&&(e=!1),this.currentEnemy=e?new r.default(i.StatsGen.generateBossStats(this.floor,this.area)):new r.default(i.StatsGen.generateEnemyStats(this.areaTotal)),this.player.setFoeContext(this.currentEnemy),this.currentEnemy.setFoeContext(this.player)},e}());t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,n,o){this.domElement=e,this.value=t,this.attribute=n,this.attributeDeep=o}return Object.defineProperty(e.prototype,"dom",{get:function(){return this.domElement},set:function(e){this.domElement=e,this.updateDOMElement()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"val",{set:function(e){this.value=e,this.updateDOMElement()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"attrib",{set:function(e){this.attribute=e,this.updateDOMElement()},enumerable:!0,configurable:!0}),e.prototype.updateDOMElement=function(){this.attributeDeep?this.domElement[this.attribute][this.attributeDeep]=this.value:this.domElement[this.attribute]=this.value},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(){function e(){}return Object.defineProperty(e.prototype,"hp",{get:function(){return this.statistics.health},set:function(e){var t=this.hp;if(this.statistics.health=e,e<t){var n=t-e;this.takeDamageCallbacks(n)}e<=0?o.default.nextarea():this.updateHPDisplay()},enumerable:!0,configurable:!0}),e.prototype.updateHPDisplay=function(){this.HPDisplay.val=this.hp,this.updateHealthBar()},e.prototype.giveAttack=function(e){this.foe.hp=this.foe.hp-e.damage},e.prototype.setFoeContext=function(e){this.foe=e},e.prototype.takeDamageCallbacks=function(e){},e.prototype.updateHealthBar=function(){},e}();t.default=r},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=n(4),s=document.getElementById("click"),u=function(e){function t(){var t=e.call(this)||this;return t.level=1,t.statistics={max_health:100,health:100,base_damage:3,exp:0,exp_to_next:20},new a.default(s,function(){t.giveAttack({damage:t.statistics.base_damage})}),t}return r(t,e),t}(i.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this.target=e,this.callback=t,this.target=e,this.callback=t,this.enableListener()}return e.prototype.enableListener=function(){this.target.onclick=this.callback},e.prototype.disableListener=function(){this.target.onclick=null},e}();t.default=o},function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=n(6),s=n(1),u=function(e){function t(t){var n=e.call(this)||this;return n.statistics=t,n.healthBar=new s.default(document.getElementById("enemyHPBar"),"100%","style","width"),n.HPDisplay=new s.default(document.getElementById("enemyHP"),n.hp,"innerHTML"),n.damageLabelManager=new a.default(document.getElementById("damage-taking-box")),n.updateHPDisplay(),n}return r(t,e),t.prototype.takeDamageCallbacks=function(e){this.damageLabelManager.recieveAttack(e)},t.prototype.updateHealthBar=function(){this.healthBar.val=this.statistics.health/this.statistics.max_health*100+"%"},t}(i.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.parent=e}return e.prototype.recieveAttack=function(e){var t=this,n=new r(e);this.parent.appendChild(n.domCreator(n.dmg)),setTimeout(function(){n.destroyCallback(t.parent)},n.lifeSpan)},e}(),r=function(){function e(e,t){void 0===t&&(t=400),this.lifeSpan=t,this.dmg=e}return e.prototype.destroyCallback=function(e){e.removeChild(this.dom)},e.prototype.domCreator=function(e){var t=document.createElement("span");t.classList.add("damageLabel"),t.innerText="-"+e.toString(),t.style.animation="labelFloat",t.style.animationDuration=this.lifeSpan+"ms";var n={x:100*Math.random(),y:100*Math.random()};return t.style.top=n.y.toFixed(0)+"%",t.style.left=n.x.toFixed(0)+"%",this.dom=t,t},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.generateEnemyStats=function(e){var t=10*Math.ceil((4+100*e/80*10/2)/10);return{max_health:t,health:t}},e.prototype.generateBossStats=function(e,t){var n=100*e+100*t/80;return{max_health:n,health:n}},e.prototype.generateGold=function(e){return 10*e},e}();t.StatsGen=new o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n(9),i=function(){function e(){var e=this;this.holding=!1,this.slots=new Array(4),this.moveToMouse=function(t){e.container.dom.style.top=t.y+"px",e.container.dom.style.left=t.x+"px"},this.image=new o.default(document.getElementById("mouse-follow-image"),"","src"),this.container=new o.default(document.getElementById("mouse-follow"),"block","style","display"),document.addEventListener("mousemove",this.moveToMouse),document.addEventListener("mouseup",function(){e.targetedDropzone&&e.held?e.targetedDropzone.recieve(e.drop()):e.revert&&e.held&&e.revert.recieve(e.drop())}),this.createDropAreas(),this.pickup({damage:100,frequency:100,image:"assets/images/placeholder.png",stage:1},this.slots[0])}return Object.defineProperty(e.prototype,"heldCompanion",{set:function(e){this.held=e,e?(this.container.val="block",this.image.val=e.image):(this.container.val="none",this.image.val="")},enumerable:!0,configurable:!0}),e.prototype.createDropAreas=function(){for(var e=0;e<this.slots.length;e++)this.slots[e]=new r.default(document.getElementById("slot-"+(e+1)))},e.prototype.setDropzone=function(e){this.targetedDropzone=e},e.prototype.removeDropzone=function(){this.targetedDropzone=void 0},e.prototype.pickup=function(e,t){this.heldCompanion=e,this.holding=!0,this.revert=t},e.prototype.drop=function(){var e=this.held;return this.heldCompanion=null,e},e.prototype.isHolding=function(){return!!this.holding},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(1),i=function(){function e(e){var t=this;this.mouseOver=function(){o.default.userDragManager.isHolding()&&!t.held&&(o.default.userDragManager.setDropzone(t),t.dom.classList.add("fighter-slot-highlight"))},this.mouseOut=function(){o.default.userDragManager.removeDropzone(),t.dom.classList.remove("fighter-slot-highlight")},this.remove=function(){t.held&&(o.default.userDragManager.pickup(t.held,t),t.held=void 0,t.img.val="assets/images/playerbg.png",t.dom.removeEventListener("mousedown",t.remove),t.dom.classList.remove("fighter-slot-in-use"))},this.dom=e,this.img=new r.default(e.querySelector("img"),"../images/playerbg.png","src"),this.dom.addEventListener("mouseover",this.mouseOver),this.dom.addEventListener("mouseout",this.mouseOut),this.dom.addEventListener("mouseup",function(){t.recieve(o.default.userDragManager.drop())})}return e.prototype.recieve=function(e){!this.held&&e&&(this.held=e,this.img.val=e.image,this.dom.addEventListener("mousedown",this.remove),this.dom.classList.add("fighter-slot-in-use"))},e}();t.default=i}]);