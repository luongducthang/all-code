//  Đối tượng Date  // hàm này làm việc với ngày tháng
 var date = new Date();   //  phải tạo biến để khai báo đối tượng không thì sẽ không lấy được thời gian cụ thể 

 var year = date.getFullYear();
 var month = date.getMonth() + 1;   // in ra khoảng tháng 0 -> 11 nếu tháng 1 thì sẽ thành 0 nên bị thiéu thì phải cộng thêm 1
 var day = date.getDay();
// console.log(`${day}/${month}/${year}`);  
 console.log(date);



// Math object   //  đối tượng toán học
console.log(Math.PI);   //  trả về  hệ số PI
console.log(Math.round(1.5));  //  cho một số thập phân làm tròn số nguyên VD; 1,3 thì thành 1
console.log(Math.abs(-4)); // in ra giá trị tuyệt đối( chuyển số âm thành số dương )
console.log(Math.ceil(4.1));  //  làm tròn trên   VD 4.1 thì  = 5
console.log(Math.floor(4.9));  // làm tròn dưới   VD 4.9 thì  = 4


console.log(Math.random());  //  trả về số thập phân nhỏ hơn 1
// console.log(Math.floor(Math.random()  * 10));  //  kết hợp với floor  để trả về 1 số ngẫu nhiên dưới 10
var random = Math.floor(Math.random() * 5);   //  trả về kết quả từ 0 -> 4
var bonus = [       // sẽ trả về giá trị ngẫu nhiên trong mảng 
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]; 
console.log(bonus[random]);

// VD THỰC HÀNH
var random = Math.floor(Math.random() * 100);   //  trả về ngẫu nhiên khoảng từ 0 -> 99
if(random < 5){   //  khi load trang mà sô ra ngẫu nhiên từ đổ xuống thì thành công   ( tạo tỉ lệ thành công)
    console.log("Thăng cấp thành công");
}


console.log(Math.max(-100 ,5 ,50 ,20 ,80));  //  max là sẽ lấy giá trị lớn nhất
console.log(Math.min(-100 ,5 ,50 ,20 ,80));  //  min là sẽ lấy giá trị nhỏ nhất


