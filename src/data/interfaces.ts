import { CompanionStage } from './types';

export interface EntityStats {
    max_health: number,
    health: number,
    base_damage?: number,
    exp?: number,
    exp_to_next?: number,
}

export interface Companion {
    name: string,
    image: string,
    damage: number,
    speed: number,
    stage: CompanionStage,
    rarity: string
}

// Add changeable global settings here
export interface Settings {
    damageVariance: number;
}

export interface AttackEvent {
    damage: number,
}