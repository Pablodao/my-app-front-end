export const keysOf = <T extends object>(o: T) =>
    Object.keys(o) as Array<keyof typeof o>;