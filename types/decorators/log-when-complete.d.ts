import { type Observable } from 'rxjs';
export declare function logWhenObservableCompletes<This, Args extends any[], Return extends Observable<any>>(originalMethod: (this: This, ...args: Args) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>): (this: This, ...args: Args) => Return;
