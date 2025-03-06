let input = prompt("Nhập vào dãy số phải có dấu cách:");
let numbers = [];
let temp = "";
for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char >= "0" && char <= "9") {
        temp += char;
    } else if (temp !== "") {
        numbers.push(parseInt(temp));
        temp = "";
    }
}
if (temp !== "") {
    numbers.push(parseInt(temp));
}
if (numbers.length === 0) {
    console.log("Không có số hợp lệ.");
    document.write("Không có số hợp lệ.");
} else {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log("Phần tử lớn nhất trong mảng là:", max);
    document.write("Phần tử lớn nhất trong mảng là: " + max);
}