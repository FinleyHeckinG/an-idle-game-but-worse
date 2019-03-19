import Entity from './entity'
import { EntityStats } from './data/interfaces'
import damageLabelManager from './components/damageLabel'

import MappedDOM from './includes/domMap'

class Enemy extends Entity {

    statistics: EntityStats
    healthBar: MappedDOM
    hitShadow: MappedDOM
    damageLabelManager: damageLabelManager;

    constructor(stats: EntityStats) {
        super();
        this.statistics = stats;

        this.healthBar = new MappedDOM(
            document.getElementById("enemyHPBar"),
            "100%",
            "style", "width"
        );

        this.HPDisplay = new MappedDOM(
            document.getElementById("enemyHP"),
            this.hp,
            "innerHTML"
        );

        this.damageLabelManager = new damageLabelManager(
            document.getElementById("damage-taking-box")
        );

        this.updateHPDisplay();
    }

    public takeDamageCallbacks(dmg: number): void {
        this.damageLabelManager.recieveAttack(dmg);
    }

    public updateHealthBar() {
        this.healthBar.val = this.statistics.health / this.statistics.max_health * 100 + "%";
    }
}


export default Enemy;