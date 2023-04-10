"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterForDoubleClick = void 0;
const rxjs_1 = require("rxjs");
/**
 * Filters click events for a given time only emitting if there is one subsequent event.
 *
 * @param debounce Adjust the listening time after the first event.
 */
function filterForDoubleClick(debounce = 250) {
    return (source) => source.pipe((0, rxjs_1.buffer)(source.pipe((0, rxjs_1.debounceTime)(debounce))), (0, rxjs_1.filter)((clicks) => clicks.length > 1), (0, rxjs_1.map)(([value]) => value));
}
exports.filterForDoubleClick = filterForDoubleClick;
