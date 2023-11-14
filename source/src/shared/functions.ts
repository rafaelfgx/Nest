export function copyProperties(source: object | undefined, destination: object) {
    if (!source) return destination;

    return Object.assign(destination, ...Object.keys(destination).map((key) => ({ [key]: source[key] })));
}
