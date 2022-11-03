// Phương thức làm việc sử dụng với chuỗi

var myString = '     Hoc js  js  lập trình f8    ';

// 1. length   // trả về độ dài của một chuỗi
// console.log(myString.length)


// 2. Find index   //  là tìm vị trí của phần tử trong chuỗi
// console.log(myString.indexOf('js' ,6));  // truyền phương thức indexOf
// thêm 6 là tính từ đầu dấu nháy đến sau chữ js và từ chữ js đầu đến chữ js thứ 2 in ra là 9;

// console.log(myString.lastIndexOf('js'));   // phương thức lastIndexOf là lấy giá trị cuối cùng

// console.log(myString.search('js')); 
// Phương thức search khác indexOf là,
// ! không hỗ trợ tìm số thứ tự ('js' ,6) , 
// ! search thì hỗ trợ tìm biểu thức chính quy


// 3. Cut String // hàm cắt chuỗi 
// console.log(myString.slice(-3 , -1));


// 4. Replace  // là hàm ghi đè
// console.log(myString.replace('js', 'Javascrip'));   
// console.log(myString.replace(/js/g, 'Javascrip'));   
// thêm biểu thức chính quy  VD : /js/g  để ghi đè được lên tất cả những từ js


// 5. Convert to upper case   // chuyển đổi tất cả thành chữ hoa
// console.log(myString.toUpperCase())

// 6. Convert to lower case    // chuyển đổi tất cả thành chữ thường 
// console.log(myString.toLowerCase())

// 7. Trim  //  loại bỏ khoảng trắng khi người dùng nhập bị thừa
// console.log(myString.trim().length);

// 8. Splip //  dựa vào một điểm chung để cắt chuỗi thành một mảng array
// var languages = 'javascript';
// console.log(languages.split(''))

// 9. Get a charater by index   // lấy số kí tự trong chuỗi theo dấu ngoặc vuông
// const myString1 = 'Luong Thang';
// console.log(typeof myString1.charAt[0]);
