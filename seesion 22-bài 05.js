let num = [];
for (let i = 0; i < 5; i++) {
    num.push(Math.floor(Math.random() * 100) + 1);
}
let num2 = 0;
let num3 = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        num2 += num[i];
    } else {
        num3 += num[i];
    }
}
console.log("Mảng số nguyên ngẫu nhiên:", num);
console.log("Tổng các số lẻ:", num3);
console.log("Tổng các số chẵn:", num2);
document.write("Mảng số nguyên: " + num + "<br>");
document.write("Tổng các số lẻ: " + num3 + "<br>");
document.write("Tổng các số chẵn: " + num2);
