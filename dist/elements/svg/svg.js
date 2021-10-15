"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVG = void 0;
const element_1 = require("./element");
const circle_1 = require("./circle");
const clip_path_1 = require("./clip-path");
const definitions_1 = require("./definitions");
const description_1 = require("./description");
const ellipse_1 = require("./ellipse");
const group_1 = require("./group");
const image_1 = require("./image");
const line_1 = require("./line");
const marker_1 = require("./marker");
const meta_data_1 = require("./meta-data");
const path_1 = require("./path");
const polygon_1 = require("./polygon");
const rectangle_1 = require("./rectangle");
const symbol_1 = require("./symbol");
const text_1 = require("./text");
const title_1 = require("./title");
const use_1 = require("./use");
const a_1 = require("./a");
const script_1 = require("./script");
/**
* This class represents a SVG element. A "scalable vector grapic" has two important geometric
* properties. The "viewPort" defines the width and height of the graphic. The "viewBox" defines the
* internal coordinate system used to draw elements.
*/
class SVG extends element_1.Element {
    constructor(arg1, arg2) {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        if (arg1 && arg2) {
            svg.setAttributeNS(null, 'width', arg1.toString());
            svg.setAttributeNS(null, 'height', arg2.toString());
        }
        super(svg);
    }
    /**
    * Constructs and returns a SVG object within the DOM.  If the provided
    * argument is an HTMLElement appends the interactive within that element. If
    * the provided a value is a string, appends the interactive within the HTML
    * element with the corresponding ID. If no element is found throws an error.
    */
    static SVG(idOrElement, width, height) {
        // get the container element
        let container;
        if (typeof idOrElement == "string") {
            container = document.getElementById(idOrElement);
            if (container === null || container === undefined) {
                throw new Error(`There is no HTML element with the id: ${idOrElement}`);
            }
        }
        else {
            container = idOrElement;
        }
        // construct and append the svg
        let svg = new SVG(width, height);
        container.appendChild(svg.root);
        return svg;
    }
    /**
    * Return the width of this svg element.
    */
    get width() {
        return this.root.width.baseVal.value;
    }
    /**
    * Set the width of this svg element.
    */
    set width(value) {
        this.root.setAttribute('width', value.toString());
    }
    /**
    * Returns the height of this svg element.
    */
    get height() {
        return this.root.height.baseVal.value;
    }
    /**
    * Sets the height of this svg element to the provided value.
    */
    set height(value) {
        this.root.setAttribute('height', value.toString());
    }
    get x() {
        return this.root.x.baseVal.value;
    }
    set x(value) {
        this.root.x.baseVal.value = value;
    }
    get y() {
        return this.root.y.baseVal.value;
    }
    set y(value) {
        this.root.y.baseVal.value = value;
    }
    /**
    * Returns the maximum x-coordinate in the internal (drawing) coordinate system
    */
    get maxX() {
        return this.root.viewBox.baseVal.x + this.root.viewBox.baseVal.width;
    }
    /**
     * Returns the maximum y-coordinate in the internal (drawing) coordinate system
     */
    get maxY() {
        return this.root.viewBox.baseVal.y + this.root.viewBox.baseVal.height;
    }
    get viewBox() {
        return this.root.getAttribute('viewBox');
    }
    /**
     * Sets the viewBox to the provided string in the form of "minX minY width height". This updates
     * the internal coordinate system used for drawing.
     */
    set viewBox(value) {
        this.root.setAttribute('viewBox', value);
    }
    /**
     * Updates the internal coordinate system (used for drawing and scaling).
     *
     * @param minX The top left x-position of the internal coordinate system
     * @param minY The top left y-position of the internal coordinate system
     * @param width The width of the internal coordinate system
     * @param height The height of the internal coorinate system
     */
    setViewBox(minX, minY, width, height) {
        this.root.setAttribute('viewBox', `${minX} ${minY} ${width} ${height}`);
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
    // descriptive elements
    description() {
        return this.appendChild(new description_1.Description());
    }
    metadata() {
        return this.appendChild(new meta_data_1.MetaData());
    }
    title() {
        return this.appendChild(new title_1.Title());
    }
    // shape elements, comments inherited from implementing abstract class
    circle(cx, cy, r) {
        return this.appendChild(new circle_1.Circle(cx, cy, r));
    }
    ellipse(cx, cy, rx, ry) {
        return this.appendChild(new ellipse_1.Ellipse(cx, cy, rx, ry));
    }
    image(href, width, height) {
        return this.appendChild(new image_1.Image(href, width, height));
    }
    line(x1, y1, x2, y2) {
        return this.appendChild(new line_1.Line(x1, y1, x2, y2));
    }
    path(d = '') {
        return this.appendChild(new path_1.Path(d));
    }
    polygon(points) {
        return this.appendChild(new polygon_1.Polygon(points));
    }
    rect(x, y, width, height) {
        return this.rectangle(x, y, width, height);
    }
    rectangle(x, y, width, height) {
        return this.appendChild(new rectangle_1.Rectangle(x, y, width, height));
    }
    // structural elements
    defs() {
        return this.appendChild(new definitions_1.Definitions());
    }
    group() {
        return this.appendChild(new group_1.Group());
    }
    svg(x, y, width, height) {
        let svg = new SVG(width, height);
        svg.x = x;
        svg.y = y;
        return this.appendChild(svg);
    }
    symbol() {
        return this.appendChild(new symbol_1.Symbol());
    }
    use(x, y, width, height) {
        return this.appendChild(new use_1.Use(x, y, width, height));
    }
    // typography elements
    text(x, y, str = '') {
        return this.appendChild(new text_1.Text(x, y, str));
    }
    // other elements
    /**
    * Constructs and appends an 'a' (link) element within this element.
    */
    a(href) {
        return this.appendChild(new a_1.A(href));
    }
    /**
    * Constructs and appends a 'clipPath' element within this element.
    */
    clipPath() {
        return this.appendChild(new clip_path_1.ClipPath());
    }
    /**
    * Constructs and appends a 'marker' element within this element.
    */
    marker(refX, refY, width, height) {
        return this.appendChild(new marker_1.Marker(refX, refY, width, height));
    }
    /**
    * Constructs and appends a 'script' element within this element.
    */
    script() {
        return this.appendChild(new script_1.Script());
    }
}
exports.SVG = SVG;
//# sourceMappingURL=svg.js.map