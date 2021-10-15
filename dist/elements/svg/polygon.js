"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const shape_1 = require("./shape");
/**
* A polygon is a closed shape defined by a series of points.
*/
class Polygon extends shape_1.Shape {
    constructor(points) {
        let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttributeNS(null, 'points', points);
        super(polygon);
    }
    get points() {
        return this.root.getAttribute('points');
    }
}
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.js.map