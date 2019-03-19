import Entity from './entity'
import { EntityStats } from './data/interfaces'

import MappedDOM from './includes/domMap'

class Enemy extends Entity {

    statistics: EntityStats
    healthBar: MappedDOM
    hitShadow: MappedDOM

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
            this.hp.toFixed(2),
            "innerHTML"
        );

        this.updateHPDisplay();
    }

    public updateHealthBar() {
        this.healthBar.val = this.statistics.health / this.statistics.max_health * 100 + "%";
    }
}


export default Enemy;