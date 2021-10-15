"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
const element_1 = require("./element");
/**
* A shape is a basic geometric element.
*/
class Shape extends element_1.Element {
    /**
    * Constructs a shape element with the provided root.
    */
    constructor(root) {
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
    /**
    * Returns the location of the point on the path.
    */
    getPointAtLength(x) {
        return this.root.getPointAtLength(x);
    }
    /**
    * Returns the total length of this path.
    */
    getTotalLength() {
        return this.root.getTotalLength();
    }
    /**
    * Returns true if the point is contained within this shapes fill
    */
    isPointInFill(point) {
        return this.root.isPointInFill(point);
    }
    /**
    * Returns true if the point is contained within this shapes stroke
    */
    isPointInStroke(point) {
        return this.root.isPointInStroke(point);
    }
}
exports.Shape = Shape;
//# sourceMappingURL=shape.js.map