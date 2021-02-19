/**
 * This function is used to create automatically all required types of actions
 *
 * @param base
 * @param optional
 */
export function createRequestTypes(base, optional) {
    for (let index in optional) {
        optional[index] = base + '_' + index;
    }
    return {
        REQUEST: base + '_REQUEST',
        SUCCESS: base + '_SUCCESS',
        FAILURE: base + '_FAILURE',
        ...optional,
    };
}
