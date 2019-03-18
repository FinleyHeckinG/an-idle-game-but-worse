import Player from "./player";
import Enemy from "./enemy";

import { EntityStats } from './entity'

class Game{

    gold: number = 0;
    stage: number = 1;
    player: Player;
    currentEnemy: Enemy;

    constructor(){
        this.player = new Player();
        this.generateEnemy();
    }

    private generateEnemy(){
        let stats = (): EntityStats => {
            return {
                identifier: this.stage,
                base_damage: 1,
                max_health: 10,
                health: 10,
            }
        }
        this.currentEnemy = new Enemy(stats());
        this.player.setFoeContext(this.currentEnemy);
        this.currentEnemy.setFoeContext(this.player);
    }

    public addGold = () => {
        this.gold += 1;
    }
    public nextStage = () => {
        this.stage += 1;
        this.generateEnemy();
    }
}

const GAME = new Game();

export default GAME;