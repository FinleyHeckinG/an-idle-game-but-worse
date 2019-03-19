import { EntityStats } from './data/interfaces'

class StatsGenerator {

    public generateEnemyStats(area: number): EntityStats {
        let stats: EntityStats;

        let max_health = Math.ceil((4 + ((area * 100) / 80 * 10) / 2) / 10) * 10;
        let health = max_health;

        stats = {
            max_health: max_health,
            health: health
        }

        return stats;
    };

    public generateBossStats(floor: number, area: number): EntityStats {
        let stats: EntityStats;
        let baseFloorHealth = floor * 100;
        let max_health = baseFloorHealth + (area * 100) / 80;
        let health = max_health;

        stats = {
            max_health: max_health,
            health: health
        }

        return stats;
    };

    public generateGold(area: number): number {
        let gold: number;

        return gold;
    };

}

export const StatsGen = new StatsGenerator();