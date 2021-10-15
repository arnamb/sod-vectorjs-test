"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = void 0;
const element_1 = require("./element");
class Script extends element_1.Element {
    /**
    * Constructs a new sript element.
    */
    constructor() {
        let title = document.createElementNS('http://www.w3.org/2000/svg', 'script');
        super(title);
    }
    // comments inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comments inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
}
exports.Script = Script;
//# sourceMappingURL=script.js.map