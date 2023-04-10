"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWhenObservableCompletes = void 0;
const rxjs_1 = require("rxjs");
function logWhenObservableCompletes(originalMethod, context) {
    const methodName = String(context.name);
    const wrappedMethod = function (...args) {
        const called$ = originalMethod.call(this, ...args);
        return called$.pipe((0, rxjs_1.finalize)(() => console.log(`LOG: ${methodName}'s Observable completed!`)));
    };
    return wrappedMethod;
}
exports.logWhenObservableCompletes = logWhenObservableCompletes;
