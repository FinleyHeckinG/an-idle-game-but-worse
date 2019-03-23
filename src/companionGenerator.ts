import { COMPANIONS_LIST } from "./data/characters"
import { Companion } from "./data/interfaces"
import { GAMESETTINGS } from "./settings"
import { CompanionStage } from "./data/types";

class CompanionGenerator{

    public newCompanion(): Companion{
        let chance = Math.random() * 100;
        let newCompanion: Companion;
        if(chance <= GAMESETTINGS.dropChance.Legendary){
            // GENERATE LEGENDARY
            newCompanion = this.generateStats(COMPANIONS_LIST.Legendary, "legendary");

        } else if(chance > GAMESETTINGS.dropChance.Legendary && chance <= GAMESETTINGS.dropChance.Rare){
            // GENERATE RARE
            newCompanion = this.generateStats(COMPANIONS_LIST.Rare, "rare");

        } else {
            // GENERATE COMMON
            newCompanion = this.generateStats(COMPANIONS_LIST.Common, "common");
        }

        return newCompanion;
    }

    // Converting To Interface
    private companionAdapter(
        name: string,
        image: string, 
        damage: number, 
        speed: number, 
        stage: CompanionStage,
        rarity: string
    ): Companion {
        return{
            name: name,
            image: image,
            damage: damage,
            speed: speed,
            stage: stage,
            rarity: rarity
        }
    }

    private generateStats(type: any, rarity: string): Companion{
        let companion = type[Math.floor(Math.random() * type.length)];

        let damage = Math.floor(Math.random() * companion.damage.max) + companion.damage.min;
        let speed = Math.floor(Math.random() * companion.speed.max) + companion.speed.min;
        
        return this.companionAdapter(
            companion.name,
            GAMESETTINGS.assetRoot + companion.image + GAMESETTINGS.imageExtension,
            damage,
            speed,
            1,
            rarity
        )
    }

}

export default CompanionGenerator;