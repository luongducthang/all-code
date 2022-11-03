// Toán tử số học 
var a = 5;
var b = 2;
var c = a + b ;
console.log(c);


// lũy thừa
var a = 4;
var b = 2;
var c = a ** b ;
console.log(c);


// chia lấy du
var a = 5;
var b = 2;
var c = a % b ;
console.log(c);
// nếu in ra số dư bằng 0 thì là số chẵn , khác 0 là số lẻ


// tăng 1 giá trị số
var b = 5;
a++ ;
console.log(c);

// end Toán tử số học 





//  TOÁN TỬ GÁN

// Toán tử             Ví dụ                 Tương đương
// =                  x = y                  x = y
// +=                 x += y                 x = x + y
// -=                 x -= y                 x = x - y
// *=                 x *= y                 x = x * y
// /+                 x /= y                 x = x / y
// **=                x **= y                x = x ** y

// var a = 1;
// a -= 2;
// console.log(a);

// end  TOÁN TỬ GÁN





// TOÁN TỬ  ++ / --

var number1 = 1;

console.log(number1++); // 1   cộng lên 1 giá trị rồi suất ra kết quả.
console.log(number1); // 2

console.log(number1++); // 2
console.log(number1); // 3

console.log('--- Tiền tố ---');

var number2 = 1;

console.log(++number2); // 2   cộng lên một giá trị lên trước rồi xuất kết quả
console.log(number2); // 2

console.log(++number2); // 3
console.log(number2); // 3


// Phân tích hậu tố
var a = 6;
// Nếu in ra biến output a++ hậu tố
// b1 : nó copy biến a có giá trị = 6;
// b2 : + 1 cho a, a = a + 1 => a = 7
// b3 : trả về biến nó copy ở B1
// Nếu in giá trị của a thì bằng 7 của B2

var output = a++;
console.log('output:' , output);
console.log('a:' , a);




// HẬU TỐ  là trả về biến copy

var number = 6;
var output = number++ + --number;
// chú thích number++ là 7 nhưng trả về biến coppy = 6 ,
// khi đó thì --number = 7 thì nhưng trừ đi 1 thì bằng 6
// nên 6 + 6 = 12
console.log('output:' , output);

// VD
var number = 6;
var output = ++number * 2 - number-- * 2;
// 7 * 2 - có hậu tố trả về copy là 7 * 2

console.log('output:', output);

// end TOÁN TỬ  ++ / --





// TOÁN TỬ NỐI CHUỖI

var firstName = 'Son';
var lastName = 'Dang';
console.log(firstName + ' ' + lastName); // nếu 1 trong 2 không phải là số thì sẽ thành nối chuỗi

// VD viết tắt
var name = 'Thang';
name += ' Luong';
console.log(name);





/* TOÁN TỬ SO SÁNH

    ==     -->  bằng
    !=     -->  không bằng
    >      -->  lớn hơn
    <      -->  nhỏ hơn
    >=     -->  lớn hơn hoặc bằng
    <=     -->  nhỏ hơn hoặc bằng
*/

var a = 1;
var a = 2;
 
if(a != b){
    console.log('Dieu kien dung')
}else{
    console.log('Dieu kien sai!')
}


