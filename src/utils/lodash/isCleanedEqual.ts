import { removeEmptyValues } from './removeEmptyValues'
import isEqual from 'lodash.isequal'

export function isCleanedEqual(
  before: object,
  after: object,
  removeZero?: boolean
): boolean {
  const cleanedBefore = removeEmptyValues(before, removeZero)
  const cleanedAfter = removeEmptyValues(after, removeZero)

  return isEqual(cleanedBefore, cleanedAfter)
}
