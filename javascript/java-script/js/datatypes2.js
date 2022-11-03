// Kiểu dữ kiệu 

// Number type
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a)  //  in  để kiểm tra

// String type    là thêm dấu ngoặc đơn
var fullName = 'Luong Thang';

// Boolean   không được cho ngặc đơn hoặc hoặc kép vào
 var isSuccess = true;

 // Undefied type   là chỉ tạo biến không gán giá trị cho nó 
 var age;

//  Null   là không có gì
var isNull = null; 

console.log(typeof isNull)  //  in  để kiểm tra  là opject


// Symbol
var id = Symbol('id');  //unique
var id2 = Symbol('id');  //unique




// Phức tạp

// Function  là chỉ khi gọi biến bằng function ra thì mới chạy
 var myFunction = function(){
    alert('hello')
 }
 myFunction();  // hàm gọi

 // Object types   dùng để chứa định nghĩa key
var myOject = {
    name:'Thang Luong',
    age: 18,
    adress:'Ha Noi',
    myFunction: function(){ // gán function

    }
};
 //  là mảng
var myArray = [
    'Javascript',
    'PHP',
    'Rupy',
]; 

console.log(typeof myArray)  //  in  để kiểm tra  laf opject



