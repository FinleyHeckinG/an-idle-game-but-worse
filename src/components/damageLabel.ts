

class damageLabelManager {
    parent: HTMLElement;
    constructor(parent) {
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
        this.dom = this.domCreator(dmg);
    }

    public destroyCallback(parent): void {
        parent.removeChild(this.dom);
    }

    public domCreator(damage: number): HTMLElement {
        let label = document.createElement("span");
        label.classList.add("damageLabel");
        label.innerText = damage.toString();
        return label;
    }
}