import isEqual from 'lodash.isequal'
import omitBy from 'lodash.omitby'

function removeUndefined(obj: object) {
    return omitBy(obj, (value: unknown) => value === undefined)
}

export function isEqualWithoutUndefined(value: object, other: object) {
    const cleanedValue = removeUndefined(value)
    const cleanedOther = removeUndefined(other)
    return isEqual(cleanedValue, cleanedOther)
}
