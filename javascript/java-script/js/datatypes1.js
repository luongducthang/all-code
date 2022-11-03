// Kiểu dữ liệu
// Boolean 
// Là nó sẽ cho điều kiện là đúng hay sai

var a = 1;
var b = 2;

var isSuccess = a > b;
console.log(isSuccess);



// các giá trị javascript

// 0 
// false
// '' hoặc ""
// undefined
// NAN
// null
// tất cả 6 giá trị đều là false


//  CÂU ĐIỀU KIỆN IF & ELSE 
 var fullName = 0;
  if(fullName){
    console.log('DIEU KIEN DUNG');
  } else {
    console.log('DIEU KIEN SAI');
  }


  
  // Truthy và Falsy

  // Truthy là
  // Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy
  // Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành “khẳng định”. Trong Javascript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean
  console.log(!!1) // true
  console.log(!!'f8') // true
  console.log(!!['Mercedes']) // true


  // Falsy là
  // Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
  
  // Trong Javascript có 6 giá trị sau được coi là Falsy:
  // false
  // 0 (số không)
  // '' or "" (chuỗi rỗng)
  // null
  // undefined
  // NaN


  // Các giá trị nay đều là truethy
  // '0' (một chuỗi chứa số không)
  // ' ' (một chuỗi chứa dấu cách)
  // 'false' (một chuỗi chứa từ khóa false)
  // [] (một array trống)
  // {} (một object trống)
  // function(){}     (một hàm “trống”)






  


  // Hiểu hơn về câu lệnh điều kiện if
  // và phép so sánh


  // 0 
// false
// '' hoặc ""
// undefined
// NAN
// null
// tất cả 6 giá trị đều là false

  var a = 1;
  var b = 2;
// Toán tử && là nếu 1 trong 6 gia trị trên có trong biến thì là Flase ,
// còn không sẽ lấy giá trị cuối cùng là C
  var result = 'A' && 'B' && 'C';
  
// Toán tử OR là khi thấy giá trị đầu tiên không giống trong biến thì lấy luôn ,
// còn giá tri  đầu đúng thì lấy thứ 2 ,
// còn giá trị thứ 3 đúng thì vẫn lấy giá trị đầu
   var result = 'A' || 0 || 'C';

  console.log(result);

  if (result){
    console.log('DIEU KIEN DUNG');
  } 
  else {
    console.log('DIEU KIEN SAI');
  }
  