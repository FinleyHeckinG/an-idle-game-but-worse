export interface EntityStats {
    identifier: number | string,
    base_damage: number,
    max_health: number,
    health: number,
    exp?: number,
    exp_to_next?: number,
}

export interface AttackEvent {
    damage: number,
}