"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
const base_element_1 = require("../base-element");
/**
* This class defines the basic shape for all SVG elements within our library.
*/
class Element extends base_element_1.BaseElement {
    // TODO: tranform object/property?
    /**
    * Constructs the elements and adds it into the current controller.
    */
    constructor(root) {
        super();
        // store the root element and set the id attribute
        this.root = root;
        this.root.id = this.id;
        // this.root.classList.add(this.constructor.name.toLowerCase());
        // make the root's style declaration available
        this.style = this.root.style;
        this.classList = this.root.classList;
    }
    /**
    * Sets the provided attribute with the value. WARNING: Elements are given
    * a unique id by default. Changing the id may have unintended consequences.
    * Similarily, the style and class attributes should be accessed through the
    * properties "style" and "classList".
    */
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    /**
    * Returns the value associated with the attribute.
    */
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
    /**
    * Appends the element as a child within this element.
    */
    appendChild(child) {
        this.root.appendChild(child.root);
        return child;
    }
    /**
    * Inserts the element before the first child within this element.
    */
    prependChild(child) {
        this.root.prepend(child.root);
        return child;
    }
    /**
    * Returns true if this element contains the argument element.
    */
    contains(element) {
        return this.root.contains(element.root);
    }
    /**
    * Removes this element from the DOM and from the Element controller.
    */
    remove() {
        base_element_1.BaseElement.controller.remove(this);
        this.root.remove();
    }
    /**
    * Removes all child elements from this element.
    */
    clear() {
        let child;
        while (child = this.root.firstChild) {
            base_element_1.BaseElement.controller.get(child.id).remove();
        }
    }
    /**
     * Appends self within the corresponding element
     */
    appendSelfWithin(element) {
        let container;
        if (typeof element == "string") {
            container = document.getElementById(element);
            if (container === null || container === undefined) {
                throw new Error(`There is no HTML element with the id: ${element}`);
            }
        }
        else {
            container = element;
        }
        container.appendChild(this.root);
        return container;
    }
    /**
    * Returns the bounding box of this element. Note, this is different from the
    * getBoundingClientRect method since the bounding box is affected by the
    * current viewPort.
    *
    * If this element's root is not a SVGGraphics element as is the case for the
    * marker, title, and more element, then null is returned instead of a DOMRect.
    */
    getBoundingBox() {
        if (this.root instanceof SVGGraphicsElement) {
            return this.root.getBBox();
        }
        else {
            return null;
        }
    }
}
exports.Element = Element;
//# sourceMappingURL=element.js.map