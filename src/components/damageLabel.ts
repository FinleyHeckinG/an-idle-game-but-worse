

class damageLabelManager {
    parent: HTMLElement;
    constructor(parent: HTMLElement) {
        this.parent = parent;
    }
    public recieveAttack(damage: number): void {
        let dmgLbl = new damageLabel(damage);
        this.parent.appendChild(dmgLbl.domCreator(dmgLbl.dmg))
        setTimeout(() => {
            dmgLbl.destroyCallback(this.parent);
        }, dmgLbl.lifeSpan)
    }
}

class damageLabel {
    private dom: HTMLElement;
    public lifeSpan: number;
    public dmg: number;
    constructor(dmg: number, lifeSpan: number = 400) {
        this.lifeSpan = lifeSpan;
        this.dmg = dmg;
    }

    public destroyCallback(parent: HTMLElement): void {
        parent.removeChild(this.dom);
    }

    public domCreator(damage: number): HTMLElement {
        let label = document.createElement("span");
        label.classList.add("damageLabel");
        label.innerText = "-" + damage.toString();
        label.style.animation = "labelFloat";
        label.style.animationDuration = this.lifeSpan + "ms";

        let coords = {
            x: Math.random() * 100,
            y: Math.random() * 100
        }

        label.style.top = coords.y.toFixed(0) + "%";
        label.style.left = coords.x.toFixed(0) + "%";

        this.dom = label;
        return label;
    }
}

export default damageLabelManager;