import Entity from './entity'
import { EntityStats } from './entity'

import MappedDOM from './components/domMap'

class Enemy extends Entity{

    statistics: EntityStats
    healthBar: MappedDOM
    hitShadow: MappedDOM

    constructor(stats: EntityStats){
        super();
        this.statistics = stats;

        // this.hitShadow = new MappedDOM(
        //     document.getElementById("enemy-area"), 
        //     "", 
        //     "class"
        // );

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

    public takeDamageCallbacks(){
        // this.hitShadow.val = "hit";
        // setTimeout(()=>{
        //     this.hitShadow.val = "";
        // }, 100);
    }

    public updateHealthBar(){
        this.healthBar.val = this.statistics.health / this.statistics.max_health * 100 + "%";
    }
}


export default Enemy;