"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = void 0;
const element_1 = require("./element");
class Description extends element_1.Element {
    constructor() {
        let desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
        super(desc);
    }
}
exports.Description = Description;
//# sourceMappingURL=description.js.map