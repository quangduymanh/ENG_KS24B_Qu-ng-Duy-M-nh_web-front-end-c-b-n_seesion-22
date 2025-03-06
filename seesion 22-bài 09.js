let arr = [5, 1, 2, 8, 3, 5, 2, 10, 8, 6];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        arr2.push(arr[i]);
    }
}
for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = 0; j < arr2.length - 1 - i; j++) {
        if (arr2[j] > arr2[j + 1]) {
            let temp = arr2[j];
            arr2[j] = arr2[j + 1];
            arr2[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", arr2);
document.write("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần: " + arr2.join(", "));
