// Number ( số )
// Có hai cách tạo Number ,, nên dùng kiểu 1
1.
// var age = 18;
// var PI = 3.14;

// 2.
// var otherNumber = new Number(9);
// kiểu 2 thì trả về theo kiểu opject thì khó kiểm tra số 


// Kiểm tra dữ liệu
// var age = 18;
// var PI = 3.14;

 var result = 20 / 'ABC';     // khi cho 1 số hợp chia được thì hàm check isNaN sẽ không phải là số không hợp lê nên là fash

// cách để kiểm tra NaN
return(isNaN(result))     // cho hàm isNaN cho thêm biến muốn kiểm tra (result)
// khi tính toán có nhầm kiểu như lấy số chia cho chữ 20 / 'ABC'
// NaN là đại diện cho một kiểu số không hợp lệ


// *Cách làm việc với Number
// Hàm toString   , để in ra 1 chuỗi
// var myString = PI.toString();
// console.log(PI.toString());

// Hàm toFixed  ,  là để làm tròn số thập phân,
// nếu đuôi số dưới 0,5  -> 3,49  thì làm tròn xuống thành 3,
// còn giá trị trên 0,5 thì làm tròn lên bằng 4  .

var PI = 3.144645756754;
console.log(PI.toFixed(3))    // lấy giá trị thứ 3 ở đuôi



