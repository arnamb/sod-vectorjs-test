"use strict";
/**
* @title Color Wheel
* @description This interactive demonstrates the possible hues as modeled by the color wheel. A slider allows the user to control the number of hues displayed along the perimeter of the circle.
* @tags [color]
* @ignore false
*/
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../index.js");
const math_js_1 = require("../../util/math.js");
let defaultConfig = {
    n: 6,
    width: 720,
    height: 100
};
/**
* Constructs a 600 by 600 interactive demonstrating the color wheel.
*/
function main(id, config = defaultConfig) {
    // accept user options over default configuration
    config = Object.assign(Object.assign({}, defaultConfig), config);
    let interactive = new index_js_1.Interactive(id, {
        width: config.width,
        height: config.height
    });
    let r = math_js_1.trapezoidalWave(-1 / 3, 1, 1);
    let g = math_js_1.trapezoidalWave(0 / 3, 1, 1);
    let b = math_js_1.trapezoidalWave(1 / 3, 1, 1);
    let group = interactive.group();
    group.update = function () {
        // Clear the current state of the color wheel
        while (group.root.firstChild) {
            group.root.removeChild(group.root.firstChild);
        }
        // Redraw the color spectrum
        let n = Math.floor(config.n);
        let width = interactive.width / n;
        let height = 100;
        for (let i = 0; i < n; i++) {
            let v = i / (n);
            let x = interactive.width * (i / n);
            let rect = interactive.rectangle(x, 0, width, height);
            let rv = r(v) * 255;
            let gv = g(v) * 255;
            let bv = b(v) * 255;
            rect.style.fill = `rgb(${rv}, ${gv}, ${bv})`;
        }
    };
    group.update();
}
exports.default = main;
//# sourceMappingURL=color-spectrum.js.map