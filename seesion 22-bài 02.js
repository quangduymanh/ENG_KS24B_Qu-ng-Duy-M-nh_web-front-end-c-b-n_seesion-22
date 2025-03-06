let arr = [1, 2, 3];
let num = +prompt("Mời nhập vào số may mắn");
let num2 = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        num2 = true;
        break;
    }
}
if (num2) {
    console.log("Lucky");
} else {
    console.log("Chúc bạn may mắn lần sau");
}