import Player from "./player";
import Enemy from "./enemy";

import { StatsGen } from './statsGenerator'

// INFO:
/*
    Firstly, wagwan

    How the game works:
        - Users attack enemies.
        - Users stats effect damage, stats include:
            - Luck
            - Strength
            - ...
        - After an enemy dies another is created, each enemy is called an "area".
        - Every 20 enemies there is a floor boss, after killing it the floor is increased.
*/

class Game {

    gold: number = 0;
    area: number = 1;
    areaTotal: number = 1;
    floor: number = 1;
    player: Player;
    currentEnemy: Enemy;

    constructor() {
        this.player = new Player();
        this.generateEnemy();
    }

    private generateEnemy(boss: boolean = false) {
        if (boss) {
            this.currentEnemy = new Enemy(
                StatsGen.generateBossStats(this.floor, this.area)
            );
        } else {
            this.currentEnemy = new Enemy(
                StatsGen.generateEnemyStats(this.areaTotal)
            );
        }

        this.player.setFoeContext(this.currentEnemy);
        this.currentEnemy.setFoeContext(this.player);
    }

    public addGold = () => this.gold += StatsGen.generateGold(this.areaTotal);

    public nextarea = () => {
        this.addGold();
        if (this.area % 20 == 0) {
            this.generateEnemy(true);
            this.floor++;
            this.area = 1;
        } else {
            this.generateEnemy(false);
            this.area++;
            this.areaTotal++;
        }
    }

}

const GAME = new Game();

export default GAME;