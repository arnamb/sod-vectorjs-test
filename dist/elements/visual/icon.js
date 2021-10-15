"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const use_1 = require("../svg/use");
class Icon extends use_1.Use {
    /**
    * Construct an icon element at the position (x,y) with the provided dimensions
    */
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.classList.add('icon');
    }
}
exports.Icon = Icon;
//# sourceMappingURL=icon.js.map