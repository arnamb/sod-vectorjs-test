"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const ellipse_1 = require("./ellipse");
const line_1 = require("./line");
const rectangle_1 = require("./rectangle");
/**
* A path element allows for the creation of complicated shapes and curves.
*/
class Path extends shape_1.Shape {
    /**
    * Construct a new path element with a string of commands.
    */
    constructor(d) {
        // TODO: see comment above the type of the root
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        super(path);
    }
    /**
    * Returns the d attribute
    */
    get d() {
        return this.root.getAttribute('d');
    }
    /**
    * Sets the d attribute
    */
    set d(d) {
        this.root.setAttribute('d', d);
    }
    attatchArrow(defs, start = true) {
        if (defs === undefined) {
            throw new Error(`Undefined definitions ${this}: ${this.id}`);
        }
        defs.root.innerHTML = `<marker id="arrow" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" style="fill:#404040; stroke:none;"></path></marker>`;
        if (start) {
            this.setAttribute('marker-start', `url(#arrow)`);
        }
        else {
            this.setAttribute('marker-end', `url(#arrow)`);
        }
    }
    /**
    * Returns the path representation of the provided shape.
    */
    static getPath(shape) {
        if (shape instanceof circle_1.Circle) {
            return new Path(`M ${shape.cx + shape.r} ${shape.cy} A ${shape.r} ${shape.r} 0 0 0 ${shape.cx - shape.r} ${shape.cy} A ${shape.r} ${shape.r} 0 0 0 ${shape.cx + shape.r} ${shape.cy}`);
        }
        else if (shape instanceof ellipse_1.Ellipse) {
            throw Error('Not Implemented');
        }
        else if (shape instanceof line_1.Line) {
            throw Error('Not Implemented');
        }
        else if (shape instanceof Path) {
            throw Error('Not Implemented');
        }
        else if (shape instanceof rectangle_1.Rectangle) {
            throw Error('Not Implemented');
        }
        else {
            throw Error('Not Implemented');
        }
    }
}
exports.Path = Path;
//# sourceMappingURL=path.js.map