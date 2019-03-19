import Entity from './entity'
import { EntityStats } from './data/interfaces'

import ClickListener from './includes/clickListener'
import MappedDOM from './includes/domMap'

const attackButton: HTMLElement = document.getElementById("click");

class Player extends Entity {

    level: number = 1;

    //Defaults
    statistics: EntityStats = {
        max_health: 100,
        health: 100,
        base_damage: 1,
        exp: 0,
        exp_to_next: 20,
    }

    constructor() {
        super();
        new ClickListener(attackButton, () => {
            this.giveAttack({
                damage: this.statistics.base_damage
            })
        });
    }
}

export default Player;