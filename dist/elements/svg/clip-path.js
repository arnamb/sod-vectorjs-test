"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipPath = void 0;
const circle_1 = require("./circle");
const ellipse_1 = require("./ellipse");
const line_1 = require("./line");
const path_1 = require("./path");
const polygon_1 = require("./polygon");
const rectangle_1 = require("./rectangle");
const element_1 = require("./element");
const description_1 = require("./description");
const meta_data_1 = require("./meta-data");
const title_1 = require("./title");
class ClipPath extends element_1.Element {
    constructor() {
        let clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        super(clipPath);
    }
    circle(cx, cy, r) {
        return this.appendChild(new circle_1.Circle(cx, cy, r));
    }
    ellipse(cx, cy, rx, ry) {
        return this.appendChild(new ellipse_1.Ellipse(cx, cy, rx, ry));
    }
    line(x1, y1, x2, y2) {
        return this.appendChild(new line_1.Line(x1, y1, x2, y2));
    }
    path(d) {
        return this.appendChild(new path_1.Path(d));
    }
    polygon(points) {
        return this.appendChild(new polygon_1.Polygon(points));
    }
    rectangle(x, y, width, height) {
        return this.appendChild(new rectangle_1.Rectangle(x, y, width, height));
    }
    description() {
        return this.appendChild(new description_1.Description());
    }
    metadata() {
        return this.appendChild(new meta_data_1.MetaData());
    }
    title() {
        return this.appendChild(new title_1.Title());
    }
}
exports.ClipPath = ClipPath;
//# sourceMappingURL=clip-path.js.map