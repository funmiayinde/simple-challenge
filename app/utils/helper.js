
/**
 * 
 * @param {Array<Set>} a 
 * @param {<Array<Set>} b 
 */
export const intersection = (a, b) => {
    const result = new Set();
    a.forEach(v => {
        if (b.has(v)) {
            result.add(v);
        }
    });
    return result;
};

export const MIN_TIME_STAMP = -8640000000000000;
export let cache = new Map();
export const OPEN_STREET_URL = 'https://www.openstreetmap.org/api/0.6/map';
