"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marker = void 0;
const element_1 = require("./element");
const circle_1 = require("./circle");
const definitions_1 = require("./definitions");
const description_1 = require("./description");
const ellipse_1 = require("./ellipse");
const group_1 = require("./group");
const line_1 = require("./line");
const meta_data_1 = require("./meta-data");
const path_1 = require("./path");
const polygon_1 = require("./polygon");
const rectangle_1 = require("./rectangle");
const symbol_1 = require("./symbol");
const svg_1 = require("./svg");
const text_1 = require("./text");
const title_1 = require("./title");
const use_1 = require("./use");
/**
* A marker is a shape that can be repeatably drawn on a shape.
*/
class Marker extends element_1.Element {
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(refX, refY, width, height) {
        let element = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        element.setAttributeNS(null, 'refX', refX.toString());
        element.setAttributeNS(null, 'refY', refY.toString());
        element.setAttributeNS(null, 'markerWidth', width.toString());
        element.setAttributeNS(null, 'markerHeight', height.toString());
        super(element);
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
    get viewBox() {
        return this.getAttribute('viewBox');
    }
    set viewBox(value) {
        this.setAttribute('viewBox', value);
    }
    get refX() {
        return this.root.refX.baseVal.value;
    }
    set refX(value) {
        this.root.refX.baseVal.value = value;
    }
    get refY() {
        return this.root.refY.baseVal.value;
    }
    set refY(value) {
        this.root.refY.baseVal.value = value;
    }
    get width() {
        return this.root.markerWidth.baseVal.value;
    }
    set width(value) {
        this.root.markerWidth.baseVal.value = value;
    }
    get height() {
        return this.root.markerHeight.baseVal.value;
    }
    set height(value) {
        this.root.markerHeight.baseVal.value = value;
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
        return this.appendChild(new group_1.Group());
    }
    svg() {
        return this.appendChild(new svg_1.SVG());
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
    text(x, y, str) {
        return this.appendChild(new text_1.Text(x, y, str));
    }
}
exports.Marker = Marker;
//# sourceMappingURL=marker.js.map