function temperaturas(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] >= 18 && arr[i] <= 30)) {
            return false
        }
    }
    return true
}

console.log(temperaturas([30, 19, 21, 18]));
console.log(temperaturas([28, 45, 17, 21, 17, 70]));
console.log(temperaturas([28, 28, 45, 17, 21, 17, 70]));