export interface EntityStats {
    max_health: number,
    health: number,
    base_damage?: number,
    exp?: number,
    exp_to_next?: number,
}

// Add changeable global settings here
export interface Settings {
    damageVariance: number;
}

export interface AttackEvent {
    damage: number,
}