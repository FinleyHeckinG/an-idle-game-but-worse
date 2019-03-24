import CompanionGenerator from "./companionGenerator";

class CompanionSummonManager{

    private summonContainer: HTMLElement = document.getElementById("purchase-companion");
    private summonButton: HTMLElement = document.getElementById("summon");
    private summonFinishedContainer: HTMLElement = document.getElementById("show-companion");

    private companionGenerator: CompanionGenerator = new CompanionGenerator();

    constructor(){
        this.summonButton.onclick = () => {
            this.summonPressed();
        }
    }

    private async summonPressed(){
        if(companionGeneratorInProgress) return;

        var companionGeneratorInProgress = true;

        let generatedCompanion = this.companionGenerator.newCompanion();

        // Animation Details
        let animateButton = new Promise((res) => {

            let buttonAnimationFinished = () => {
                this.summonButton.removeEventListener("animationend", buttonAnimationFinished);
                res();
            } 

            this.summonButton.addEventListener("animationend", buttonAnimationFinished);
            this.summonButton.classList.add("button-clicked");

        });

        let animateSummon = new Promise((res) => {

            const FADEINTIME= 600;

            let fadeIn = new Promise((resolveFadeIn) => {
                setTimeout(()=>{
                    this.summonFinishedContainer.style.opacity = "1";
                    resolveFadeIn();
                }, FADEINTIME)
            })

            fadeIn.then(()=>{
                setTimeout(() => {
                    res();
                }, 5000)
            })

        });
    
        await animateButton;

        this.summonContainer.style.display = "none";
        this.summonFinishedContainer.style.display = "block";

        await animateSummon;

        companionGeneratorInProgress = false;
    }
}

export default CompanionSummonManager;