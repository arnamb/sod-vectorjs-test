"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
const element_1 = require("./element");
/**
* A hyper link element.
*/
class A extends element_1.Element {
    /**
    * Constructs a link element with the provided href.
    */
    constructor(href) {
        let root = document.createElementNS('http://www.w3.org/2000/svg', 'a');
        root.setAttributeNS(null, 'href', href);
        super(root);
    }
    // comment inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comment inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
}
exports.A = A;
//# sourceMappingURL=a.js.map