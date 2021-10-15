"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const element_1 = require("./element");
const a_1 = require("./a");
const circle_1 = require("./circle");
const clip_path_1 = require("./clip-path");
const definitions_1 = require("./definitions");
const ellipse_1 = require("./ellipse");
const line_1 = require("./line");
const path_1 = require("./path");
const polygon_1 = require("./polygon");
const rectangle_1 = require("./rectangle");
const symbol_1 = require("./symbol");
const svg_1 = require("./svg");
const text_1 = require("./text");
const title_1 = require("./title");
const use_1 = require("./use");
const description_1 = require("./description");
const meta_data_1 = require("./meta-data");
/**
* A group is a structural element that allows for elements to be grouped
* together and have styles and transformations applied to the elements in the
* group.
*/
class Group extends element_1.Element {
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor() {
        let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        super(group);
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
    // Descriptive methods
    description() {
        return this.appendChild(new description_1.Description());
    }
    metadata() {
        return this.appendChild(new meta_data_1.MetaData());
    }
    title() {
        return this.appendChild(new title_1.Title());
    }
    // Structural methods
    defs() {
        return this.appendChild(new definitions_1.Definitions());
    }
    group() {
        return this.appendChild(new Group());
    }
    svg(width, height) {
        return this.appendChild(new svg_1.SVG(width, height));
    }
    symbol() {
        return this.appendChild(new symbol_1.Symbol());
    }
    use(x, y, width, height) {
        return this.appendChild(new use_1.Use(x, y, width, height));
    }
    // Shape methods
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
    // other methods
    /**
    * Constructs and appends a text element within this element.
    */
    text(x, y, str) {
        return this.appendChild(new text_1.Text(x, y, str));
    }
    /**
    * Constructs and appends an 'a' (link) within this element.
    */
    a(href) {
        return this.appendChild(new a_1.A(href));
    }
    /**
    * Constructs and appends a clipPath within this element
    */
    clipPath() {
        return this.appendChild(new clip_path_1.ClipPath());
    }
}
exports.Group = Group;
//# sourceMappingURL=group.js.map