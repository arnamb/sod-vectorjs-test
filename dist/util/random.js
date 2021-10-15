"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mulberry32 = void 0;
/**
 * https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
 */
function mulberry32(a) {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
exports.mulberry32 = mulberry32;
//# sourceMappingURL=random.js.map