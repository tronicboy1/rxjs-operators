import { fromEvent, map, of, startWith, switchMap } from 'rxjs';
/**
 * Uses the Page Visibility API to stop and start an Observable
 * based on the visibility state.
 */
export function stopWhileHidden() {
    const visibilityEvent$ = fromEvent(document, 'visibilitychange').pipe(startWith(undefined));
    return (source) => visibilityEvent$.pipe(map(() => document.visibilityState === 'visible'), switchMap((isVisible) => (isVisible ? source : of())));
}
