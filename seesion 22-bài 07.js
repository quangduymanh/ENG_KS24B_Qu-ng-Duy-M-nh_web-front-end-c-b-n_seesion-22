let numbers = [8, 3, 10, 1, 6, 7, 2, 9, 4, 5];
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp tăng dần:", numbers);
document.write("Mảng sau khi sắp xếp tăng dần: " + numbers);
