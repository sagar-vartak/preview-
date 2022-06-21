/**
 * An event listener for cookie changes.
 * @param {Function} callback A callback function to be called when the cookie changes
 * @param {number} interval number of milliseconds to wait between each check
 */
export declare function onCookieChange(callback: (event: {
    previousCookies: string;
    currentCookies: string;
}) => void, interval?: number): void;
//# sourceMappingURL=onCookieChange.d.ts.map