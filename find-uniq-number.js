function findUniq(arr) {
    let uniqNumber;

    const repeatedNumber = getRepeatedNumber(arr);

    for (let i = 0; i < arr.length; i++) {
        if (repeatedNumber !== arr[i]) {
            uniqNumber = arr[i];
            break;
        };
    }

    return uniqNumber;
}

function getRepeatedNumber(array) {
    if (arr[0] === arr[1]) {
        return arr[0];
    } else if (arr[0] === arr[2]) {
        return arr[0];
    } else {
        return arr[1];
    }
}


console.log(findUniq([3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(findUniq([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));