import { type MonoTypeOperatorFunction } from 'rxjs';
/**
 * Uses the Page Visibility API to stop and start an Observable
 * based on the visibility state.
 */
export declare function stopWhileHidden<T>(): MonoTypeOperatorFunction<T>;
