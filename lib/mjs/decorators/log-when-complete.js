import { finalize } from 'rxjs';
export function logWhenObservableCompletes(originalMethod, context) {
    const methodName = String(context.name);
    const wrappedMethod = function (...args) {
        const called$ = originalMethod.call(this, ...args);
        return called$.pipe(finalize(() => console.log(`LOG: ${methodName}'s Observable completed!`)));
    };
    return wrappedMethod;
}
