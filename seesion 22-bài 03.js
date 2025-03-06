let input = prompt("Nhập một số nguyên bất kỳ:");
let arr = input.split("");
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
let reversedStr = reversedArr.join("");
console.log("Mảng sau khi đảo ngược:", reversedArr);
console.log("Số sau khi đảo ngược:", reversedStr);
document.write("Số sau khi đảo ngược: " + reversedStr);
