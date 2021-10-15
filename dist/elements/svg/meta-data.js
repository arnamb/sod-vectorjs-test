"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaData = void 0;
const element_1 = require("./element");
class MetaData extends element_1.Element {
    constructor() {
        let metadata = document.createElementNS('http://www.w3.org/2000/svg', 'metadata');
        super(metadata);
    }
}
exports.MetaData = MetaData;
//# sourceMappingURL=meta-data.js.map