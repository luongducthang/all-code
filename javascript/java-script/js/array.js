// Mảng (array)  //  có thể chứa bất kì kiểu dữ liệu nào kể cả số

var languages = ['javascript' , 'PHP' , 'Ruby'];
var languages1 = ['#C' , 'ABC' , 'OPF'];
// console.log(Array.isArray(languages)); //  kiểm tra xem có phải biến là Array hay không ,
// gọi đối tượng Array đến phương thức isArray đến biến




// Truy xuất mảng
// độ dài
// console.log(languages.length);

// lấy phần tử theo index  (key)
// console.log(languages[2]);  //  phần tử lấy tính từ 012345




// Làm việc với Array , các phương thức
// 1. toString
// console.log(languages.toString); // chuyển thành dạng chuỗi 

// 2. Join
// console.log(languages.join(' - '));  // hàm này để ngăn cách các kí tự của mảng

// 3. Pop
// console.log(languages.pop());  //  xoá phần tử cuối mảng trả về phần tử đã xoá   

// 4. Push
//console.log(languages.push('html', 'css'));   //  thêm phần tử ở cuối  
//console.log(languages); 

// 5. Shift
// console.log(languages.shift());   // xoá phần tử ở đàu mảng và trả về phần tử đã xoá
// console.log(languages); 

// 6. Unshift
// console.log(languages.unshift());   //  thêm phần tử vào đầu mảng
// console.log(languages); 

// 7. Splicing   //  xoá và chèn phần tử trong mảng
// languages.splice(1,2, 'CSS')   //  1 là vị trí chèn và xoá ,  2 là xoá mấy  phần tử ,  'CSS' là chèn thêm  phần tử 
// console.log(languages);   

// 8. Concat
// console.log(languages.concat(languages1));   // để nối 2 mảng với nhau

// 9. Slicing
// console.log(languages.slice(1, 2));  //  để cắt phần tử của mảng ,,
// slice(1, 2) là từ vị trí số 1 đến vị trị số 2 là ở đầu vị trí số 3
// còn lấy phần tử cuối mảng thì tính từ cuối 0, -1, -2
