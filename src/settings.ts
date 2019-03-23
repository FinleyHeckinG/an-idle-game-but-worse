import { Settings } from "./data/interfaces";

export let settings: Settings = {
    damageVariance: 0.2
}

export const GAMESETTINGS = {
    assetRoot: "assets/images/",
    imageExtension: ".png",
    dropChance: {
        Legendary: 10,
        Rare: 25,
        Common: 65
    }
}