import { Companion } from "../data/interfaces";
import Game from "../index"
import MappedDOM from "../includes/domMap";

class Dropzone {
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
        this.dom.addEventListener("mouseup", () => {
            if (!this.held) {
                this.recieve(Game.userDragManager.drop())
            };
        });

        if (Math.random() > 0.2) {
            this.recieve({
                damage: 100,
                frequency: 100,
                image: "assets/images/placeholder.png",
                stage: 1
            });
        }

    }

    public recieve(companion: Companion) {
        if (!this.held && companion) {
            this.held = companion;
            this.img.val = companion.image;
            this.dom.addEventListener("mousedown", this.remove);
            this.dom.classList.add("fighter-slot-in-use");
        }
    }

    private mouseOver = () => {
        if (Game.userDragManager.isHolding() && !this.held) {
            Game.userDragManager.setDropzone(this);
            this.dom.classList.add("fighter-slot-highlight");
        }
    }

    private mouseOut = () => {
        Game.userDragManager.removeDropzone();
        this.dom.classList.remove("fighter-slot-highlight");
    }

    public remove = () => {
        if (this.held) {
            Game.userDragManager.pickup(this.held, this);
            this.held = undefined;
            this.img.val = "assets/images/playerbg.png";
            this.dom.removeEventListener("mousedown", this.remove);
            this.dom.classList.remove("fighter-slot-in-use");
        }
    }
}

class DropPool {

}


export default Dropzone;