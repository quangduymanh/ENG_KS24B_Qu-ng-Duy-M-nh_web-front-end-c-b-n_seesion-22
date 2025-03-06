let choice;
let myarray = [];

do {
    console.log("Menu");
    console.log("1. Nhập vào");
    console.log("2. Hiển thị");
    console.log("3. Thêm");
    console.log("4. Sửa");
    console.log("5. Xóa");
    console.log("6. Thoát");

    choice = +prompt("Mời nhập lựa chọn của bạn");

    switch (choice) {
        case 1:
            let arraylength = +prompt("Nhập số lượng phần tử:");
            myarray = [];
            for (let i = 0; i < arraylength; i++) {
                let element = prompt(`Nhập vào phần tử thứ ${i + 1}:`);
                myarray.push(element);
            }
            break;
        
        case 2:
            if (myarray.length === 0) {
                console.log("Mảng hiện đang rỗng.");
            } else {
                console.log("Mảng hiện tại:", myarray.join(", "));
            }
            break;

        case 3:
            let element = prompt("Nhập phần tử muốn thêm:");
            myarray.push(element);
            console.log(`Đã thêm phần tử "${element}" vào mảng.`);
            break;

        case 4:
            let updateIndex = +prompt("Nhập vị trí muốn sửa:");
            if (updateIndex >= 0 && updateIndex < myarray.length) {
                let newValue = prompt(`Giá trị cũ là: ${myarray[updateIndex]}. Nhập giá trị mới:`);
                myarray[updateIndex] = newValue;
                console.log(`Đã cập nhật phần tử tại vị trí ${updateIndex} thành "${newValue}".`);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;

        case 5:
            let deleteIndex = +prompt("Nhập vị trí muốn xóa:");
            if (deleteIndex >= 0 && deleteIndex < myarray.length) {
                let removed = myarray.splice(deleteIndex, 1);
                console.log(`Đã xóa phần tử "${removed}" tại vị trí ${deleteIndex}.`);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;

        case 6:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 6.");
    }
} while (choice !== 6);