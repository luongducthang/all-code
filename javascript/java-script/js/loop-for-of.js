// // Vòng for
// Giải thích : vòng này sẽ chạy biến đầu tiên 1 lần rồi chạy 2 biến còn lại ,
// cứ thoả mãn Điều Kiện là cộng thêm 1  cho đến ( lúc > 1000 thì ĐK không thoả mãn thì dừng lại)
// for(var i = 1; i <= 1000; i++){
//     console.log(i);
// }

// Cách lấy ra các phần tử trong mảng 

// var num = [48, 75, 92, 61, 54, 83, 76];
// var arr = num.length;
// for (var i = 0; i < arr;i++){
//     console.log(num[i]);
// }


// cách tính tổng của mảng
// function sumArray(num1){
// var a = 0;

// for (var i = 0; i < num1.length;i++){
//     a += num1[i];
// }   
// return a; 
// }
// var num1 = [48, 75, 92];
// console.log(sumArray(num1));



// Dùng for-of 
// Object.values(myInfo)  là giá trị của key lấy ở đối tượng biến (myInfo)
var myInfo = {
    name:'Thắng Lương',
    age:'22',
    adrres:'Hà Nam'
}
for(var key of Object.values(myInfo)){
    console.log(key)  //  cách để lấy từng kí tự của biến
 }

