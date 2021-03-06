"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_js_1 = __importDefault(require("../../../elements/svg/path.js"));
const element_js_1 = __importDefault(require("../../../elements/svg/element.js"));
describe('Path', function () {
    describe('constructor', function () {
        it('should create a path with a unique id and add it to the element controller', function () {
            let path = new path_js_1.default("M 50,50 L 100,100");
            chai.expect(element_js_1.default.controller.get(path.id)).to.equal(path);
        });
        it('should create elements with different identifiers', function () {
            let path1 = new path_js_1.default("M 50,50 L 100,100");
            let path2 = new path_js_1.default("M 50,50 L 100,100");
            chai.expect(element_js_1.default.controller.get(path1.id)).to.equal(path1);
            chai.expect(element_js_1.default.controller.get(path2.id)).to.equal(path2);
        });
    });
    describe('path setter/getter correct', function () {
        it('should work with an empty string', function () {
            let originalPath = "";
            let path = new path_js_1.default(originalPath);
            let endPath = path.d;
            chai.expect(endPath).to.equal(originalPath);
        });
        it('should return same path as passed in', function () {
            let originalPath = "M 50,50 L 100,100";
            let path = new path_js_1.default(originalPath);
            let newPath = path.d;
            chai.expect(newPath).to.equal(originalPath);
        });
        it('should be able to set path', function () {
            let originalPath = "M 50,50 L 100,100";
            let newPath = "M 200,200 L 50,50";
            let path = new path_js_1.default(originalPath);
            path.d = newPath;
            chai.expect(newPath).to.equal(path.d);
        });
        it('should be able to set path multiple times with increased complexity', function () {
            let originalPath = "M 50,50 L 100,100";
            let newPath = "M 200,200 L 50,50";
            let finalPath = "M 50,50 L 100,100 l 25,0 Z";
            let path = new path_js_1.default(originalPath);
            path.d = newPath;
            chai.expect(newPath).to.equal(path.d);
            chai.expect(finalPath).to.not.equal(path.d);
            path.d = finalPath;
            chai.expect(finalPath).to.equal(path.d);
            chai.expect(newPath).to.not.equal(path.d);
        });
    });
});
//# sourceMappingURL=path.test.js.map