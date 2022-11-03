// For / in

// TH1

var myInfo = {
    name:'Thắng Lương',
    age:'22',
    adrres:'Hà Nam'
}
for(var key in myInfo){   //  in là để biến (key) lấy giá trị của (biến object myInfo)
    console.log (key); //  khi biến key lấy được các giá trị của rồi thì console ra thay trong mảng thành key luôn
}

// TH2

// var myInfo = [
//     'Thắng Lương',
//     '22',
//     'Hà Nam'
// ];
// for(var key in myInfo){  
//     console.log(key);   // key in ra là số mảng 
//     //     console.log(myInfo[key]);
// }


// // TH3

//  var myInfo = 'Thắng Lương';
//  for(var key in myInfo){
//     console.log(myInfo[key])  //  cách để lấy từng kí tự của biến
//  }





function run(object) {
    var arr = [];
    for(var key in object) {
       arr.push( `Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}