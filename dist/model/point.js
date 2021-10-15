"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const base_element_1 = require("../elements/base-element");
/**
* A point has an x position and y position
*/
class Point extends base_element_1.BaseElement {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map