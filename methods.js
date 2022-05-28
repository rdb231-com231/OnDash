function merge(arr) {
    let newArr = null;
    for (var i of arr) {
        if (!newArr) newArr = `${i}`;
        else newArr = `${newArr}${i}`
    };
    return newArr
};

function str(arr) {
    let newArr = null;
    for (var i of arr) {
        if(!newArr) newArr = `${i}`;
        else newArr = `${newArr} ${i}`;
    }
    return newArr;
};

function kick(arr, val) {
    return arr.slice(0, arr.indexOf(val)) + arr.slice(arr.indexOf(val) + 1);
};

module.exports = { str, merge, kick }

