import { type Observable, finalize } from 'rxjs';

export function logWhenObservableCompletes<This, Args extends any[], Return extends Observable<any>>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
  const methodName = context.name;
  const wrappedMethod = function (this: This, ...args: Args): Return {
    const called$ = originalMethod.call(this, ...args);
    return called$.pipe(finalize(() => console.log(`LOG: ${String(methodName)}'s Observable completed!`))) as Return;
  };
  return wrappedMethod;
}
