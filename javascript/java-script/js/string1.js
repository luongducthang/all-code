// Chuỗi

// 2 cách tạo chuỗi ,,
//  nên dùng cách 2 vì ngắn gon nhanh , kiểu dữ liệu sẽ là opject chứ không phải String

// var fullName = new String('Thang Luong') //kiểu tạo chuõi 1
var fullName = 'Thang Luong' //kiểu tạo chuõi 2
console.log(typeof fullName)  // cách kiểm tra loại dữ liệu

// Một số trường hợp dùng dấu \
var fullName1 = 'Thang Luong la \'tao\'';   // dấu \ là để phân ngăn cách
console.log( fullName1)


// Kiểm tra độ dài của chuỗi
var fullName2 = 'Thang Luong   ';  
console.log( fullName2.length)  // kiểm tra độ dài của chuỗi


// Cách viết ngắn gọn khi code dài quá
var fullName2 = 'Thang Luong' 
+ ' Xuống dòng khi code dài quá '
+ ' Xuống dòng khi code dài quá '
+ ' Xuống dòng khi code dài quá '
;  
console.log( fullName2)


// Template string ES6  ( chuỗi mẫu )
var firstName = ' Luong' 
var lastName = 'Thang ' 
console.log(`Toi la: ${firstName} ${lastName}`);  //  đưa biến vào chuỗi  ${}


