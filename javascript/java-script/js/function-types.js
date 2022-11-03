// Các loại hàm 
// 1 Declaration function
// 2 Expression function
// 3 Arrow function

function showMessage(){  // là loại hàm Declaration
    console.log('Declaration function')

}
showMessage();


// là loại hàm Expression function  , đặt tên function là nhìn vào để cho dễ hiểu hàm này làm gì
var showMessage2 = function(){
    console.log('Expression function')
}
showMessage2();

setTimeout(function autoLogin(){  //nghĩa hàm này là tự động login sau khoảng thời gian định nghĩa

});

var myObject = {
    myFunction: function(){

    }
}