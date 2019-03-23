class Draw{

    private opened: boolean = false;
    private title: string;
    private content: HTMLElement;
    private tab: HTMLElement;


    constructor(drawDOMElement: HTMLElement, title = "Default Draw"){
        this.title = title;
        this.content = drawDOMElement;

        this.createTab();
    }

    public toggle = () => {
        if(this.opened){
            this.close();
        } else {
            this.open();
        }
    }

    public open = () => {
        this.opened = true;
        this.setTranslate("0%");
    }

    public close = () => {
        this.opened = false;
        this.setTranslate("-100%");
    }

    private createTab(){
        // DOM Creation
        var tabElement = document.createElement("div");
        tabElement.classList.add("tab");
        tabElement.innerHTML = `<span>${this.title}</span>`

        // Event Listeners
        tabElement.onmousedown = (MouseDownEvent: MouseEvent) => {
            let boxWidth = this.content.getBoundingClientRect().width;
            let difference = (a:number, b:number) => Math.abs(a - b);

            let toMouse = (MouseMoveEvent: MouseEvent) => {
                this.content.style.transition = "unset"
                let pos = MouseMoveEvent.x - MouseDownEvent.offsetX;
                if(pos > boxWidth) return;
                if(MouseMoveEvent.x - MouseDownEvent.offsetX < -1) return;
                this.setTranslate((pos - boxWidth) + "px");
            }

            let mouseUp = (MouseUpEvent: MouseEvent) => {
                this.content.style.transition = "transform 0.5s"
                if(difference(MouseUpEvent.x, MouseDownEvent.x) < 5){
                    this.toggle();
                } else {
                    if(MouseUpEvent.x > boxWidth / 1.5){
                        this.open();
                    } else {
                        this.close();
                    }
                }
                document.removeEventListener("mousemove",  toMouse);
                document.removeEventListener("mouseup",  mouseUp);
            }
            document.addEventListener("mousemove", toMouse);
            document.addEventListener("mouseup", mouseUp);
        }
       

        // Assignment
        this.tab = tabElement;
        this.content.appendChild(this.tab);
    }

    private setTranslate(transformAmount: string){
        this.content.style.transform = `translateX(${transformAmount})`;
    }

}

export default Draw;