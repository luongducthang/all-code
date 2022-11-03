// Object

var  emailKey = 'email';
var myInfo = {    //  gồm key và value
    name: 'Thang Luong',
    age: 18,
    address: 'Chuyen ngoai, Duy tien, Ha Nam',
    [emailKey]: 'thangluong4760@gmail.com',  //  cách lấy biến ngoài object
    getName: function(){
        return this.name;
    }
};
// var  myKey = 'address';

// delete myInfo.age;  //  cách để xoá  1 cặp key

// myInfo.email = 'thangluong4760@gmail.com'
//  thêm cặp key và value vào sau object đã được tạo

// console.log(myInfo[myKey]);  //  muốn lấy giá trị của biến ngoài object thì thêm [cho biến vào]  , 
// còn muốn lấy ở trong object thì thêm 'tên phần tử muốn lấy'

console.log(myInfo.getName());  // lấy key khi value của nó là  một hàm

// function  - >  phương thức    //  Tạo một phương thức  getName: function(){
// other ->  thuộc tính / property   // Tạo một thuộc tính   age: 18








// this là gọi tói thuộc tính

// Object constructor   //   thiết kế đối tượng  

function User(firtName, lastName, avatar){    //   hàm mô tả thiết  kế của đối tượng
    this.firtName = firtName;    //   thuộc tính
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName1 = function(){   //  phương thức
        return `${this.firtName} ${this.lastName}`
    }
}

// Object prototype là  thêm thuộc tính và phương thức nằm ngoài phần thiết kế
User.prototype.className = 'f8';   
User.prototype.getClassName = function(){     // định nghĩa thêm phương thức ở ngoài 
    return this.className;
}

var author = new User('Thắng', 'lương', 'Đức');   //   biến khởi tạo new User từ bản thiết kế đã được mô tả
var user = new User('Yop', 'Big', 'Up');

author.title = 'học lập trình';      //  thêm phương thức thuộc tính cho biến author đã được khởi tạo
user.comment = 'chia sẻ kiến thức';

// console.log(author,constructor === User);
console.log(author.getName1());
console.log(user.getName1());