"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlCircle = void 0;
const control_1 = require("./control");
// A first pass implementation of a control circle. In the future, it seems to
// make sense for basic elements to be draggable. I think this would mean
// making a draggable interface or class that contains window event handlers.
// Another alternative would be moving some of that logic into the controller or
// interactive wrapper class.
class ControlCircle extends control_1.Control {
    /**
    * Constructs a control at the position (x,y)
    */
    constructor(x, y) {
        super(x, y);
        this.point.r = ControlCircle.circleRadius;
        this.handle.r = ControlCircle.circleRadius + .8;
        this.handle.style.strokeWidth = '2';
        // this.point.style.fill = 'lightblue';
        this.point.style.fill = this.handle.style.stroke;
    }
}
exports.ControlCircle = ControlCircle;
// Describes the size of the control handle and point
ControlCircle.circleRadius = 10;
//# sourceMappingURL=control-circle.js.map