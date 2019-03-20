import { CompanionStage } from './types';

export interface EntityStats {
    max_health: number,
    health: number,
    base_damage?: number,
    exp?: number,
    exp_to_next?: number,
}

export interface Companion {
    damage: number,
    frequency: number,
    image: string,
    stage: CompanionStage
}

// Add changeable global settings here
export interface Settings {
    damageVariance: number;
}

export interface AttackEvent {
    damage: number,
}