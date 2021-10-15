"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const circle_1 = require("../../elements/svg/circle");
function createSVG() {
    let container = document.createElement('div');
    let svg = container.appendChild(new __1.SVG().root);
}
beforeEach(() => {
    createSVG();
});
it('renders correctly', () => {
    const circle = new circle_1.Circle(1, 2, 3);
    expect(circle.root.outerHTML).toMatchSnapshot();
});
//# sourceMappingURL=circle.test.js.map