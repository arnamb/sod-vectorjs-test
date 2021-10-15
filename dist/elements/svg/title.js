"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const element_1 = require("./element");
class Title extends element_1.Element {
    constructor() {
        let title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        super(title);
    }
}
exports.Title = Title;
//# sourceMappingURL=title.js.map