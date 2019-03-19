import GAME from './index'
import MappedDOM from './includes/domMap'
import { EntityStats, AttackEvent } from './data/interfaces'
import { settings } from './settings';

class Entity {
    statistics: EntityStats;
    foe: Entity;
    HPDisplay: MappedDOM;

    get hp(): number {
        return this.statistics.health;
    }

    set hp(val: number) {
        let prevHealth = this.hp;
        this.statistics.health = val;
        if (val < prevHealth) {
            // Recieved Attack
            let diff = prevHealth - val;
            this.takeDamageCallbacks(diff);
        }
        if (val <= 0) {
            GAME.nextarea();
        } else {
            this.updateHPDisplay();
        }
    }

    protected updateHPDisplay(): void {
        this.HPDisplay.val = this.hp;
        this.updateHealthBar();
    }

    public giveAttack(event: AttackEvent): void {
        this.foe.hp = this.foe.hp - event.damage;
    }

    public setFoeContext(enemy: Entity): void {
        this.foe = enemy;
    }

    public takeDamageCallbacks(dmg: number): void { }
    public updateHealthBar(): void { }
}

export default Entity;