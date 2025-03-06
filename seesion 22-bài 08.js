let numbers = [3, 1, 2, 2, 4, 3, 3, 5, 1, 2];
let maxCount = 0;
let num3 = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            count++;
        }
    }
    if (count > maxCount || (count === maxCount && numbers[i] < num3)) {
        maxCount = count;
        num3 = numbers[i];
    }
}
console.log("Phần tử xuất hiện nhiều nhất:", num3);
document.write("Phần tử xuất hiện nhiều nhất: " + num3);
