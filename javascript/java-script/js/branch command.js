// Câu lệnh rẽ nhánh ,,  if else


// VD : nếu viết thông thường thì sẽ kiểm tra tất cả caau lệnh nào đúng thì in ra
// var date = 2;
// if (date === 2){
//     console.log('bằng 2');
// }

// if (date === 3){
//     console.log('bằng 3');
// }

// if (date === 2){
//     console.log('bằng 4');
// }


// Đây là khối code của câu lệnh rẽ nhánh ( cú pháp if else )
var date = 2;
if (date === 2){
    console.log('bằng 2');
}else if (date === 3){    // kiểm tra,nếu câu lệnh đầu mà đúng thì lấy luôn không kiểm tra câu sau nữa 
    console.log('bằng 3');
}else if (date === 2){
    console.log('bằng 4');
}else{
    console.log('sai rồi');   //  nếu không có câu lệnh nào đúng thì thành else
}


// Đây là khối code của câu lệnh rẽ nhánh ( cú pháp switch )

var type = 3;
switch(type){
    case 2:
    // case 3:
    // case 4:
    // case 5:
        console.log('trường hợp 2');
    break;
    
    case 3:  //  khi hàm chạy thì tính từ (case) 3 đúng thì sẽ chạy tất cả các (case) còn lại 
        console.log('trường hợp 3');     
    break;  //  break là để kết thúc dùng break để ngăn việc chạy đến các case còn lại
    
    case 4:
        console.log('trường hợp 4');
    break;
    case 5:
        console.log('trường hợp 5');
    break;
    default:    //  khi giá trị của biến không nằm trong các (case) trên thì thành (default)
        console.log('Không biết');
}

// Khi nào mà muốn so sánh dùng toán tử thì dùng  : if else
// khi nào biết trước giá trị (biến) , trường hợp nhiều hơn 3 thì dùng :  switch  case





// Ternary operator - toán tử 3 ngôi
var course = {
    name: 'Javascript',
    coin:250
}

// Đây toán tử 2 ngôi
// kí hiệu $ là để xác định đây là biến, hàm, thuộc tính, sự kiện và đối tượng
// if(course.coin > 0){   //  truyền từ tên biến đến phần tử giống css
//     console.log (`${course.coin} Coins`);  // dấu huyền cũng giống đấu 'nháy' nhưng có tác dụng tìm (giá trị phần tử) bên trong kiểu dữ liệu 
// }else{
//     console.log('miễn phí')
// }


// Đây toán tử 3 ngôi
// kí tự ? là để ngăn cách 
// giải thích : nếu điều kiên (course.coin > 0) đúng thì sẽ lấy giá trị `${course.coin} Coins` còn sai sẽ thành 'miễn phí'
var result = course.coin > 0 ? `${course.coin} Coins` : 'miễn phí';
console.log(result);
  
// Sử dụng khi trường hợp dùng đơn giản ngắn gọn không dài dòng:
// var a = 1;
// var b = 2;
// var c = a > 0 ? a : b;

