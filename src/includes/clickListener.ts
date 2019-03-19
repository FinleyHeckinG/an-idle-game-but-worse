class ClickListener {
    constructor(private target: HTMLElement, private callback: EventListener){
        this.target = target;
        this.callback = callback;
        this.enableListener();
    }
    public enableListener(): void{
        this.target.onclick = this.callback;
    }
    public disableListener(): void{
        this.target.onclick =  null;
    }
}

export default ClickListener;