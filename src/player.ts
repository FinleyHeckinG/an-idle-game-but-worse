import Entity from './entity'
import { EntityStats } from './entity'

import ClickListener from './components/clickListener'
import MappedDOM from './components/domMap'

const attackButton: HTMLElement = document.getElementById("click");

class Player extends Entity{

    level: number = 1;
    
    //Defaults
    statistics: EntityStats = {
        identifier: "Player",
        base_damage: 1,
        max_health: 100,
        health: 100,
        exp: 0,
        exp_to_next: 20,
    }

    constructor(){
        super();
        new ClickListener(attackButton, ()=>{
            this.giveAttack({
                damage:this.statistics.base_damage
            })
        });
    }
}

export default Player;