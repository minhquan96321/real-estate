
// var : đặt tên biến 
/** hàm built-int
 * Alert : Hiện thông báo 
 * Console : Hàm phương thức 
 *1.log : lấy các biến in ra thông báo
  2.warn : cảnh báo
  3.error : Lỗi
 * Confirm : Hàm hội thoại 
 * Prompt : Hàm xử lí hội thoại điền input;
 * Set timeout : Đoạn code chạy trong 1 khoảng thời gian , chạy 1 lần 
 * set interval : Thực thi liên tục trong 1 khoảng thời gian ,chạy không ngừng       
 * 
 * Phải return bên trong hàm mới dùng được 
 * console.log bên ngoài hàm 
 */
// confirm('Xac nhan ban du tuoi');
// console.log('Ngu thu chet');
// prompt('Xac nhan du tuoi');
//  setInterval(function() {
//     console.log('Ngu thu chet')
//  }, 1000)

//  setTimeout(function() {
//     alert('Hoc k hieu')
//  })


// Học Toán tử ;
/** Toán tử 
 * Toán tử số học 
 * Toán tử gán
 * Toán tử so sánh 
 * Toán tử logic
 */

// var a = 1 + 2 ;
// var b = 'Cao Minh Quan';


// Toán tử Số Học
/**
 + -> Cộng
 - -> Trừ
 * -> Nhân
 ** -> Lũy Thừa ;
 / -> Chia
 % -> Lấy số dư
 ++ -> Tăng đơn vị;
 -- -> giảm đơn vị
 */

 // Cộng , trừ nhân chia
//  var a = 1; var b= 2 ; var c = a + b;
 // Lũ thừa 
//  var d = 2 ** 2;
 // Lấy số dư;
//  v

/** Toán tử chuỗi 
 * Toán tử chuỗi - string operator;
 */



/**
 *  Dữ Liệu Boolean : kiểm tra đúng sai : true hay false
 */

// var a = 1 ;
// var b = 22;
//  var isSucess  = a > b ; trả vè true hoặc false;

/**
 * 2. Kiểu Dữ Liệu phức tạp
    - Funcition : Dạng dữ liệu hàm 
    - Object : Lưu tất cả các dữ liệu bên trong
    -myArray : Lưu các giá trị chuỗi Mảng
    -typeof : Kiểm tra các dữ liệu
 */ 

// 1. Funcition :
// var maiFuncition = function(){
//     alert('Chao cac ban'); ---> funcition : tự đi nghĩa 
// }
// maiFuncition();

// 2. Object
// var myObject  = {
//     name : 'Cao Minh Quan',
//     age : 18,
//     adress : 'Ha Noi'
// };

// --myArray ;
// var myArray = [
//     'Hihi',
//     'PHP',
//     'Ruby'  
// ];


/** Toán tử so sáng 2 
 * === ---> Bằng tuyệt đối
 * !== ---> Khác tuyệt đối 
 */

// 3.funcition : Khái niệm hàm 
/**
 -- Tham số trong hàm 
 + Định nghĩa 
 + Kiểu dữ liệu
 + Tính private
 + Nhiều tham số

 -- Truyền tham số
 + 1 tham số 
 + Nhiều tham số 

 -- Arguments
 + Đối tượng tham số 

 -- Tính chất :
 + Không thực thi khi định nghĩa 
 + sẽ thực thi sau khi được gọi
 + có thể nhận tham số 
 + có thể trả về 1 giá trị
 */

 // Gán vào trong 
//  function showDialog(mess) {
//     console.log(mess);
//  }
//  showDialog('chao tat ca con gioi');

// Vòng for 
// `${param}` : te bờ lốc tring : Điền và hiện các thứ mong muốn 
// for1
// function writelong() {
//     for(var param of arguments) {
//         console.log(param);
//     }
// }
// for2.
// function writelong() {
//     var myTring = ' ';
//     for(var param of arguments) {
//         myTring += `${param}-`
//     }
// }
// writelong('1','2','30');

//toString() : trỏ đến chuỗi 

// funcion là cái gì 
//- khai báo biến trong hàm 
/**
 * Các loại hàm fucinon
 * 1.Declaration fucion
 * 2.Expression fucion
 * 3.Arrow funcion
 */

//1.function showMessage() { Có thể gọi trước định nghĩa 
//2.var showMessage2 = function(); Gán thằng biến function : không thể gọi trước định nghĩa 

/** V Làm việc với chuỗi 
 * //1 : Cách tạo chuỗi 
 * C1- var fullName = 'Cao Minh Quân'
 * C2-var fullName = new string('Cao Minh Quan');  
 * 2 : Một số case sử dụng backslash (\)
 * - var fullName = 'Cap Minh Quan \'T la nhat''
 * 3 : Xem độ dài chuỗi 
 * - fullName = 'Cap Minh Quan \'T la nhat''
 * console.log = (fullName.length)
 * 4 : Template string ES6
 *    var firstName = 'Quan'
 *    Var lastName = 'Dang'
 * console.log = (`Toi la : ${firstName} ${lastName}`)
 * 
 * // 2 Làm việc với chuỗi 
 * 1. Length // kiểm tra độ dài chuỗi 
 * 2. Find indexOf('Chuoi',vị trí) // Tìm đến vị trí cần tìm , lastindexOf : Tìm vị trí cuối 
 * 3. Cut string : Cắt chuỗi 
 * console.log = (fullName.slice(vị trí stast,ví trih end))
 * 
 * 4. Replace : Ghi đè 
 * c1-console.log = (fullName.replace('Ten Cân thay','Tên Thay thế '))
 * c2-console.log = (fullName.replace(/Ten Cân thay/g,'Tên Thay thế ')) thay thế tất cả 
 * 
 * 5. Convert to upper case : Chuyển đổi thành chữ hoa  
 *    console.log = (fullName.toUpperCase())
 * 
 * 6. Convert to lower case : Chuyển đổi thành chữ thường   
 *     console.log = (fullName.toLowerCase())
 *    
 * 7. Trim : Loại bỏ khoảng trắng thừa 
 *     console.log = (fullName.trim())
 * 
 * 8. Split : Cắt 1 chuỗi thành 1 Mảng
 *    var languages = 'js,PHP,Ruby';
 *    console.log = (languages.Split('Điểm chung để tách'))
 *     
 * 9. Get a character by index : Lấy 1 kí tự bất kì 
 *    const myString2 = 'Cao Quan'
 *     console.log = (myString2.character(vị trí tìm));
 *    
 */

// var car2 = [
//    'Java',
//    'PHP',
//    'Ruby',
//    'javarep'
// ]

// console.log(car2.splice(1,2));

// Object trong javascript

var emailKey = 'email';
var myInfo = {
   name: 'Minh Quuan',
   age: 18,
   address: 'Ha Noi, VN',
   [emailKey]: 'quanminhcao0@gmail.com',
// Thêm va lưu
 getName: function() {
   return this.name
 }
};

myInfo.email = 'Caominhquan@gmail.com'
// Đặt thêm ki

// Xóa valưu
delete myInfo.age

// Lấy va lưu ra 
// c1:console.log(myInfo.email);
// c2: console.log(myInfo['address']);

// Function --> Phương thức / method
// others --> Thuộc tính  / property
console.log(myInfo['address']);

// Object constructor / Xây dựng đối tượng

function User(firstName, lastName,avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;

   this.getName = function() {
      return `${this.firstName} ${this.lastName}`;
   }
}

// Thêm thuộc tính vào thằng cha 
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
   return this.className;
}

var author = new User('Quân', 'Cao' , 'Avatar');
var user = new User('Trang', 'Cao', 'Avatar');
// Cấp biến cho fuction

author.title = 'Chia sẻ dạo F8';
user.commen = 'Đi chém người';
// Tạo thêm phương thức 
console.log(author);
console.log(user);

// Đối tườn Date

// C1 :var date = new Date(); trả về đối tượng
// C2 : var date = Date(); Trả về string
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);

// Cấu trúc rẽ nhánh

var course = {
   name : 'Javascrip',
   conin: 250
}

var result = course.conin > 0 ? `${course.conin} Conins` : 'Miễn Phí';

/**
 1.for - Lặp với điều kiện đúng
 2. for/in - Lặp qua key của đối tượng
 3. for/of - Lặp qua value của đối tượng
 4. while - Lặp khi điều kiện đúng
 5. do-while - lặp ít nhất 1 lần , sau đó lặp khi điều kiện đúng
 */

var myArrays = [
   'javasscrip',
   'PHP',
   'Java',
   'Dart'
];

var arrleangth = myArrays.length;

 for (var i = 0 ; i < arrleangth ; i++) {
   // console.log(myArrays[i]); lấy mảng ra 
 }

 // for in lấy key ra
  for (var key in myArrays.length) {
      console.log(key);
   // Lấy gái trị ra console.log(myArrays[key]);
  }

  // for of : Lấy value
  for (var value of arrleangth) {
      console.log(value)
  }

  // vòng for lòng nhau 
  var myArray = [
      [1,2],
      [3,4],
      [5,6]
  ];

  for(var i = 0 ; i < myArray.length ; i++) {
      for(var j = 0 ; j < myArray[i].length ; j++) {
         console.log(myArray[i][j]);
      }
  }

  // Đề quyê

  var array = ['a','b','c', 'a', 'a' , 'b' , 'c'];

  console.log([...(new Set(array))]);

  function countDow(num) {
      if(num > 10) {
         return countDow(num - 1);
      }
      return num;
  }
  countDow(10)

  // Học lại bài 106 


//  XI : Làm việc với mảng II

var course = [
   {
      id : 8,
      name : 'PHP',
      coin : 800
   },

   {
      id : 1,
      name : 'PHP',
      coin : 400
   },

   {
      id : 6,
      name : 'PHP',
      coin : 700
   }
];

course.forEach(function(coure,index) {
   console.log(index,coure);
})

// 2.every

var isFree = course.every(function(coure,index) {
   return coure.coin === 0 ;
})

console.log(isFree);

// 3.some

var isFree = course.find(function(coure,index) {
   return coure.coin === 0 ;
})

console.log(isFree);


// 4.find 
var isFree = course.find(function(coure,index) {
   return coure.coin === 0 ;
})

console.log(isFree);

// 5.filter
var isFree = course.filter(function(coure,index) {
   return coure.coin === 0 ;
})

console.log(isFree);

// 6.map()

function consHandler(courset) {
   // console.log(courset)
   return {
      id: courset.id,
      name : `Khoa hoc : ${courset.name}`,
      coin: courset.coin,
      coiText :`Gia : ${courset.coin}`
   }
}

var neuCouser = course.map(consHandler);

console.log(neuCouser);

// 7.reduce()
var totalCoin = course.reduce(function(accumulator, currentValue, currentinde, originArray) {
      return accumulator + currentValue.coin;
}, 0)

console.log(totalCoin);

// 8.reduce() logic; làm việc reduce khi k chuyền value
// c1: làm phẳng mảng
var depthArray = [1,2,[3,4],5,6,[7,8]]; 
var flatArray = depthArray.reduce(function(output, depItem) {
   return output.concat(depItem);
},[])

// c2 : lấy khóa học được vào mảng mới 
var topics = [
   {
      toppic:  "Front-end",
      couse: [
            {
               id : 1,
               title : "HTML, CSS"
            },
            {
               id : 2,
               title : "Javascrep"
            }
      ]
   },
   {
      toppic : "Back-end",
      couse: [
         {
            id : 1,
            title : "PHP"
         },
          {
            id : 2,
            title : "Javasrep"
          }
      ]
   },
];

var newCocurse = topics.reduce(function(cousel, topic) {
   return cousel.concat(topic.cousel);
},[]);

// 9.Tự tạo reduce()

Array.prototype.reduce2 = function(callback, result) {
   let i = 0 ;
   if(arguments.length < 2) {
      i = 1;
      return this[0];
   }
   for(; i < this.length ; i++) {
      result = callback(result,this[i], i ,this)
   }

   return result;
}


const numbers = [1,2,3,4,5];  

const result = numbers.reduce2((toal, number) => {
   return toal + number;
}, 0)

// 10. includes method :
// 10.1 : tìm kiếm và kiểm trong chuỗi
var title = 'web dis vas';
console.log(title.includes('web',0));

//10.2 : sử dụng với mảng

var listPact = ['java' , 'rube', 'Dart'];

console.log(listPact.includes('java'));


//11 Cacllback - phần 2 

var ArrrMang = [
   'Javasrip',
   'PHP',
   'Rube'
];

// 11.1 forEach chứa bài

Array.prototype.forEach2 = function(callback) {
   for(var index in this) {
      if(this.hasOwnProperty(index)) {
         callback(this[index],index,this);
      }
   }
}

// 11.2 filtel2

Array.prototype.filter2 = function(callback) {
   for(var index in this) {
      var output = [];
      if(this.hasOwnProperty(index)) {
         var result = callback(this[index], index, this);

         if(result) {
            output.push(this[index]);
         }
      }
   }
}

// 11.3 some2
Array.prototype.some2 = function(cb) {
   for(var index in this) {
      if(this.hasOwnProperty(index)) {
         if(cb(this[index],index, this)) {
            return true;
            break;   
         } 
      }
   }

   return false;
}

// 11.4 every

Array.prototype.every2 = function(cb) {
   for(var index in this) {
      if(this.hasOwnProperty(index)) {
         if(!cb(this[index],index, this)) {
            return false;
            break;   
         } 
      }
   }

   return true;
}


/** XIII :HTML DOM
 *  CÓ 3 thành phần
 * 
 */