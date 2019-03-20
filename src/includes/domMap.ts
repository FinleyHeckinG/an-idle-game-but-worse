
class MappedDOM {
    public domElement: any;
    public value: any;
    public attribute: string;
    public attributeDeep?: string;

    constructor(domElement: any, value: any, attribute: string, attributeDeep?: string) {
        this.domElement = domElement;
        this.value = value;
        this.attribute = attribute;
        this.attributeDeep = attributeDeep;
    }

    set dom(val: any) {
        this.domElement = val;
        this.updateDOMElement();
    }

    set val(val: any) {
        this.value = val;
        this.updateDOMElement();
    }

    set attrib(val: string) {
        this.attribute = val;
        this.updateDOMElement();
    }

    get dom() {
        return this.domElement;
    }

    updateDOMElement() {
        if (this.attributeDeep) {
            this.domElement[this.attribute][this.attributeDeep] = this.value;
        } else {
            this.domElement[this.attribute] = this.value;
        }
    }
}

export default MappedDOM;