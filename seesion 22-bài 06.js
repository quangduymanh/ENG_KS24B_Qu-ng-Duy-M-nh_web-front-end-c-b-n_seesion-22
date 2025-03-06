let numbers = [2, 5, 7, 8, 5, 2, 7, 9, 5, 10];
let inputNumber = parseInt(prompt("Nhập một số nguyên cần tìm trong mảng:"));
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === inputNumber) {
        count++;
    }
}
console.log("Mảng số nguyên:", numbers);
console.log("Số", inputNumber, "xuất hiện", count, "lần trong mảng.");
document.write("Mảng số nguyên: " + numbers + "<br>");
document.write("Số " + inputNumber + " xuất hiện " + count + " lần trong mảng.");
