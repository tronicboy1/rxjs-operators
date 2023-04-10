import { buffer, debounceTime, filter, map } from 'rxjs';
/**
 * Filters click events for a given time only emitting if there is one subsequent event.
 *
 * @param debounce Adjust the listening time after the first event.
 */
export function filterForDoubleClick(debounce = 250) {
    return (source) => source.pipe(buffer(source.pipe(debounceTime(debounce))), filter((clicks) => clicks.length > 1), map(([value]) => value));
}
