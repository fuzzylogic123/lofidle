const sum = (/** @type {Number[]} */ array) => array.reduce((partialSum, a) => partialSum + a, 0);

export {
    sum
}