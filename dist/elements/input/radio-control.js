"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioControl = void 0;
const input_1 = require("./input");
const check_box_1 = require("./check-box");
/**
*  Radio Buttons with labels. Only one of the checkboxes will be checked at any given time.
*/
class RadioControl extends input_1.Input {
    /*
    * labels: the labels for the radio buttons
    * x: x position of control
    * y: y position of the control
    * index: the starting button to be highlighted
    */
    constructor(x, y, labels, index = 0) {
        if (labels === undefined || labels.length == 0) {
            throw new Error('Labels must not be empty');
        }
        super();
        this.root.setAttribute("transform", `translate(${x},${y})`);
        this.index = index;
        let counter = 0;
        this.list = [];
        let rc = this;
        labels.forEach((element, i) => {
            let checkbox = new check_box_1.CheckBox(0, counter, element, false);
            if (i == index) {
                checkbox.value = true;
            }
            checkbox.box.root.setAttribute('rx', '8px');
            checkbox.box.root.onmousedown = function () {
                rc.handleMouseDown(i);
                checkbox.value = true;
                rc.index = i;
                rc.onchange();
            };
            this.root.appendChild(checkbox.root);
            this.list.push(checkbox);
            counter += 24;
        });
    }
    get value() {
        return this.list[this.index].label.contents;
    }
    /*
    * returns the text of the currently selected button
    */
    getCurrentValue() {
        return this.list[this.index].label;
    }
    /*
    * when a button is selected, deselect all others
    */
    handleMouseDown(index) {
        this.list.forEach(element => {
            element.value = false;
        });
    }
}
exports.RadioControl = RadioControl;
//# sourceMappingURL=radio-control.js.map