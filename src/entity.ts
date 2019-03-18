import GAME from './index'
import MappedDOM from './components/domMap'

export interface EntityStats {
    identifier: number | string,
    base_damage: number,
    max_health: number,
    health: number,
    exp?: number,
    exp_to_next?: number,
}

interface AttackEvent{
    damage: number,
}

class Entity{
    statistics: EntityStats;
    foe: Entity;
    HPDisplay: MappedDOM;

    get hp():number {
        return this.statistics.health;
    }

    set hp(val: number) {
        let prevHealth = this.hp;
        this.statistics.health = val;
        if(val < prevHealth){
            this.takeDamageCallbacks();
        }
        if(val <= 0){
            GAME.nextStage();
        } else {
            this.updateHPDisplay();
        }
    }

    protected updateHPDisplay():void{
        this.HPDisplay.val = this.hp.toFixed(2);
        this.updateHealthBar();
    }

    public giveAttack(event: AttackEvent): void{
        this.foe.hp = this.foe.hp - Math.round((event.damage * (Math.random() + 1)) * 100) / 100;
    }

    public setFoeContext(enemy: Entity): void{
        this.foe = enemy;
    }

    public takeDamageCallbacks():void{}
    public updateHealthBar():void{}
}

export default Entity;