"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const group_1 = require("../svg/group");
class Label extends group_1.Group {
    constructor(x, y, str) {
        super();
        this.setAttribute('transform', `translate( ${x}, ${y})`);
        this.style.alignmentBaseline = 'middle';
        this.style.textAnchor = 'middle';
        this.textElement = this.text(0, 0, str);
    }
    drawBackgroundRectangle() {
        let box = this.textElement.getBoundingBox();
        this.textElement.remove();
        let rect = this.rectangle(box.x - 3, box.y - 3, box.width + 6, box.height + 6);
        rect.style.fill = '#ffffff';
        rect.style.stroke = 'none';
        this.appendChild(this.textElement);
    }
}
exports.Label = Label;
//# sourceMappingURL=label.js.map