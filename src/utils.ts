export const toArray = <T>(array: T | T[]): T[] =>
  Array.isArray(array) ? array : [array];
