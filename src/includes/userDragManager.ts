import { Companion } from '../data/interfaces'
import MappedDOM from './domMap';
import {Dropzone, DropPool} from '../components/dropzone'

class userDraggableManager {
    public held: Companion;
    public revert: Dropzone | DropPool;
    public holding: boolean = false;

    public targetedDropzone: Dropzone | DropPool;

    public slots: any[] = new Array(4);

    private container: MappedDOM;
    private image: MappedDOM;

    constructor() {
        this.image = new MappedDOM(
            document.getElementById("mouse-follow-image"),
            "",
            "src"
        );
        this.container = new MappedDOM(
            document.getElementById("mouse-follow"),
            "block",
            "style",
            "display"
        );

        document.addEventListener("mousemove", this.moveToMouse);

        document.addEventListener("mouseup", () => {
            if (this.targetedDropzone && this.held) {
                this.targetedDropzone.recieve(this.drop());
                return;
            }
            if (this.revert && this.held) {
                this.revert.recieve(this.drop());
                return;
            }
        });

        this.createDropAreas();

        // this.pickup({
        //     damage: 100,
        //     frequency: 100,
        //     image: "assets/images/placeholder.png",
        //     stage: 1
        // }, this.slots[0]);
    }

    set heldCompanion(val: null | Companion) {
        this.held = val;
        if (val) {
            this.holding = true;
            this.container.val = "block";
            this.image.val = val.image;
        } else {
            this.holding = false;
            this.container.val = "none";
            this.image.val = "";
        }
    }

    private createDropAreas() {
        for (let slot = 0; slot < this.slots.length; slot++) {
            this.slots[slot] = new Dropzone(
                document.getElementById("slot-" + (slot + 1))
            );
        }
    }

    public setDropzone(dropzone: Dropzone | DropPool) {
        this.targetedDropzone = dropzone;
    }

    public removeDropzone() {
        this.targetedDropzone = undefined;
    }

    public pickup(companion: Companion, revertArea: Dropzone | DropPool) {
        this.heldCompanion = companion;
        this.holding = true;
        this.revert = revertArea;
    }

    public drop() {
        let companionToDrop = this.held;
        this.heldCompanion = null;
        return companionToDrop;
    }

    public isHolding(): boolean {
        if (this.holding) {
            return true;
        } else {
            return false;
        }
    }

    private moveToMouse = (e: MouseEvent) => {
        this.container.dom.style.top = e.y + "px";
        this.container.dom.style.left = e.x + "px";
    }

}

export default userDraggableManager;