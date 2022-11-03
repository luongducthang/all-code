// Toán tử logic

// 1. && - And  điều kiện phải đúng là true
// 2. || - Or  chỉ cần 1 điều kiện đúng thì thành true
// 3. ! - Not   biến sai thành đúng

var a = 1;
var b = 2;
var c = 3;

// if(a > 0 && b > 0 && c > 0){
//     console.log('DIEU KIEN && DUNG')
// }


if(a < 0 || b < 0 || c > 0){
    console.log('DIEU KIEN || DUNG');
}

if(!(a > 0)){
    console.log('DIEU KIEN ! DUNG');
}



// Toán tử so sánh (tuyệt đối)

// == là chỉ lấy giá trị của nó bằng 1 so sánh; 
// ===  là lấy cả giá trị và kiểu dữ liệu
// !==   là lấy cả giá trị và kiểu dữ liệu để so có khac nhau không

var a = 1;
var b = '1';
console.log(a === b);

var a = 1;
var b = '7345';
console.log(a !== b);







