import { Companion } from "../data/interfaces";
import Game from "../index"
import MappedDOM from "../includes/domMap";
import CompanionGenerator from "../companionGenerator";

export class Dropzone {
    public held: Companion;
    public dom: HTMLElement;
    public img: MappedDOM;

    constructor(element: HTMLElement) {
        this.dom = element;
        this.img = new MappedDOM(
            element.querySelector("img"),
            "../images/playerbg.png",
            "src"
        );
    
        this.dom.addEventListener("mouseover", this.mouseOver);
        this.dom.addEventListener("mouseout", this.mouseOut);
        
        // test
        let cg = new CompanionGenerator();
        this.recieve(cg.newCompanion());
    }

    public recieve(companion: Companion) {
        if (!this.held && companion) {
            this.held = companion;
            this.img.val = companion.image;
            this.dom.addEventListener("mousedown", this.remove);
            this.dom.classList.add("fighter-slot-" + this.held.rarity);
        }
    }

    private mouseOver = () => {
        if (Game.userDragManager.isHolding() && !this.held) {
            Game.userDragManager.setDropzone(this);
            this.dom.classList.add("dashed-border-highlighted");
        }
    }

    private mouseOut = () => {
        Game.userDragManager.removeDropzone();
        this.dom.classList.remove("dashed-border-highlighted");
    }

    public remove = () => {
        if (this.held) {
            Game.userDragManager.pickup(this.held, this);
            this.dom.classList.remove("fighter-slot-" + this.held.rarity);
            this.held = undefined;
            this.img.val = "assets/images/playerbg.png";
            this.dom.removeEventListener("mousedown", this.remove);
        }
    }
}

export class DropPool {
    held: DropPoolItem[] = [];
    dom: HTMLElement = document.getElementById("companion-pool");

    constructor(){
        this.dom.addEventListener("mouseover", this.mouseOver);
        this.dom.addEventListener("mouseout", this.mouseOut);
    }

    public recieve(companion: Companion) {
        this.held.push(new DropPoolItem(companion, this, this.held.length));
        this.mouseOut();
        this.update();
    }

    public remove(id: any){
        this.held[id] = null;
        this.held = this.held.filter((obj) => obj );
        this.update();
    }

    private update(){
        this.dom.innerHTML = null;
        this.held.forEach((e, i)=>{
            e.setID(i);
            this.dom.appendChild(e.dom);
        });
    }

    private mouseOver = () => {
        if (Game.userDragManager.isHolding()) {
            Game.userDragManager.setDropzone(this);
            this.dom.classList.add("dashed-border-highlighted");
        }
    }
    private mouseOut = () => {
        Game.userDragManager.removeDropzone();
        this.dom.classList.remove("dashed-border-highlighted");
    }
}

class DropPoolItem {
    held: Companion;
    droppool: DropPool;
    dom: HTMLElement;
    id: Number;

    constructor(held: Companion, droppool: DropPool, id: Number){
        this.held = held;
        this.droppool = droppool;
        this.id = id;
        this.generateDOM();
        this.dom.addEventListener("mouseover", this.mouseOver);
        this.dom.addEventListener("mouseout", this.mouseOut);
        this.dom.addEventListener("mousedown", this.remove);
    }

    private generateDOM(){
        let container, img;
        container = document.createElement("div");
        container.classList.add("companion-pool-item");
        container.classList.add("fighter-slot-" + this.held.rarity)
        img = document.createElement("img");
        img.src = this.held.image;
        img.draggable = false;
        container.appendChild(img);
        this.dom = container;
    }
    
    public setID = (id: Number) => {
        this.id = id;
    }

    private mouseOver = () => {
        this.dom.classList.add("companion-background-hovered");
    }

    private mouseOut = () => {
        this.dom.classList.remove("companion-background-hovered");
    }

    public remove = () => {
        if (this.held) {
            Game.userDragManager.pickup(this.held, this.droppool);
            this.droppool.remove(this.id);
        }
    }
}
