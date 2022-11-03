// Hàm (function)
// function showDK(){
//     alert('hello')
// }
// showDK();  //  hàm gọi



// // Tham số  là định nghĩa hàm
// function showDialog(a,b){  //  định nghĩa ra hàm và truyền vào là tham số (a,b)
//     console.log('test');
// }
// showDialog('');  //  hàm gọi và truyền vào thì là đối số




// Đối tượng arguments// vòng for lặp đi lặp lại
// arguments là mảng
function writeLog(){
   var myString = '';
   for( var param of arguments){  // hàm này là chạy lấy phần tử của mảng để gán vào biến ,
    
    myString += `${param} - ` 
   }
   console.log(myString)
}
writeLog('Log 1' , 'Log 2' , 'Log 3');  //  bao nhiêu phần tử  thì chạy bấy nhiêu lần



// Từ khóa return trong hàm{
    function cong(a,b){
        return a + b;  //  return có thể trả về bất cứ kiểu giá trị nào
        // return {a,b};
        // return 'a' + 'b';

    }
var result = cong(5,5);
console.log(result)



