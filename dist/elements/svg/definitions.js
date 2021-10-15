"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Definitions = void 0;
const index_1 = require("../../index");
const element_1 = require("./element");
class Definitions extends element_1.Element {
    constructor() {
        let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        super(defs);
    }
    marker(refX, refY, width, height) {
        return this.appendChild(new index_1.Marker(refX, refY, width, height));
    }
}
exports.Definitions = Definitions;
//# sourceMappingURL=definitions.js.map