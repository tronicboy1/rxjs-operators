"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopWhileHidden = void 0;
const rxjs_1 = require("rxjs");
/**
 * Uses the Page Visibility API to stop and start an Observable
 * based on the visibility state.
 */
function stopWhileHidden() {
    const visibilityEvent$ = (0, rxjs_1.fromEvent)(document, 'visibilitychange').pipe((0, rxjs_1.startWith)(undefined));
    return (source) => visibilityEvent$.pipe((0, rxjs_1.map)(() => document.visibilityState === 'visible'), (0, rxjs_1.switchMap)((isVisible) => (isVisible ? source : (0, rxjs_1.of)())));
}
exports.stopWhileHidden = stopWhileHidden;
