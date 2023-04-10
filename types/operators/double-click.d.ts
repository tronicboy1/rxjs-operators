import { type MonoTypeOperatorFunction } from 'rxjs';
/**
 * Filters click events for a given time only emitting if there is one subsequent event.
 *
 * @param debounce Adjust the listening time after the first event.
 */
export declare function filterForDoubleClick<T>(debounce?: number): MonoTypeOperatorFunction<T>;
