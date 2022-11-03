// Khi khai báo function đặt trùng tên,
// thì hàm cuối cùng sẽ ghi đè lên 2 hàm còn lại

function showMessage0(){
    console.log('Message 1')
}

function showMessage0(){
    console.log('Message 2')
}

function showMessage0(){
    console.log('Message 3')
}
showMessage0();



// Được khai báo biến trong hàm
// Được khai báo hàm trong hàm nhưng phải cho hàm gọi ở trong hàm đó
function showMessage(){
    function showMessage2(){
        console.log('Message 2');
    }
    showMessage2();
}
showMessage();

