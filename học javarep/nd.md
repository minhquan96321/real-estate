// Bắt đầu học Phần chính

/** XIII : HTML DOM
 * 
 */

// 1. Document object
//1.1 Ghi chuỗi vào body HTML
// document.write('HELLO GUYS')

// 2 Get element methods

// HTML DOM
// 1. Element
// 2 .Attribute
// 3.Text

// var headingNode = document.getElementById('heading');

//Attribute node & Text node

// Thêm các Attribute
// var headingElement = document.querySelector('h1');
// headingElement.title = 'Heading';

// C2
// headingElement.setAttribute('class', 'heading');

// Lấy class ra
// headingElement.getAttribute('class');


/** InnerText vs textContent Property
 * innerText : Trả lại những gì mình thấy
 * textContent : Trả về : tất cả element
 */


// var headingElements = document.querySelector('.heading');

/** Thêm các element
 * InnerHTML vs OuterHTML Property
 * 
 */

// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>Heading</h1>';

//  DOM CSS :   DOM style
// console.log(boxElement.style);

// boxElement.style.width = '100px';
// boxElement.style.heigth = '100px';
// boxElement.style.backgroundColor = 'red';

// c2
// Object.assign(boxElement.style, {
//     width : '200px',
//     heigth : '100px',
//     backgroundColor: 'red'
// })

// ClassList Property
// 1. add : Thêm class vào element
// 2 .Contains : kiểm tra một class 
// 3 . remove : Xóa bỏ class
// 4 .toggle : vừa thêm vừa xóa class

// var boxeLenmet = document.querySelector('.box-2');

// boxeLenmet.classList.add('red');
// console.log(boxeLenmet.classList.contains('red'));

// DOM events
// 1.Attribute events
// 2.Assign events using the element node
// - e : Đối tượng MouseEven thực hiện các sự kiện k lặp nhau
// target : trả các element đang lắng nghe Even

// 3 . Input / slect
// 4. Key up / down

//- input lấy dữ liệu
// var inputValue;
// var inpuElement = document.querySelector('input type="text"');

// inpuElement.oninput = function(e) {
//     inputValue = e.target.value;
// }

//- Kiểm tra check
// var inputCheck = document.querySelector('input type="checkbox"');
// inputCheck.onchange = function(e) {
//     console.log(e.target.checked);
// }
 


// 2 phương thức
// - preventDefault : loại bỏ hành vi mặc đinh hành vi HTML
// - stopPropagation : Loại bỏ sự kiện nổi bọt

// var aElements = document.querySelectorAll('a');
// kiểm tra có phải chuỗi bắt đầu
// for(var i = 0; i < aElements.length ; ++i) {
//     aElements[i].onclick = function(e) {
        
//         if(!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }
/**
 * XIV JSON, Fetch, Postman
 * 1: JSON Là một định dạnh giữ liệu (chuỗi)
 * 1.2 : JavaScript Object Notation
 * 1.2 : JSON: Number, Boolean, Null, Arrap, Object
 * // Mã hóa / giải mã
 * // Encode / decode
 * // Stringify: từ js -> JSON
 * // Parse: từ JSON -> JS
 */

// var json = '["Javarip", "PHP", ]'

// Khái niệm : Promise (sync, async)
// 1 : Sync : Đồng bộ
// 2 : Async : bất đồng bộ
// 3 : Nỗi Đau
// Comback hell : lòng các comback lại với nhau
// 4 : Thực hành tạo ra Promise
// Bước 1 : new Promise
// Bước 2 : Executor

// 4.1 : trạng thái : Pendding thành công
// 4.2                 Fulfilled thất bại
// 4.3 : Rejected : Thất bại
// var promise = new Promise(
//     //Executor
//     function(resolve, reject) {
//         // Logic
//         // Thành công : resolve()
//         // Thất bại : reject()
//     }
// );

// promise
//     //  then : Chạy thành công
//     .then(function() {
//         return 1
//     })

//     .then(function(data) {
//         return 2
//     })

//     .then(function(data) {
//         console.log(3);
//     })
//     // catch : Bất lỗi
//     .catch(function() {

//     })
//     //finally : 
//     .finally(function() {

//     });

// Tất chất chuỗi (chain) : thực hành 
// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000) 
//     .then(function() {
//         console.log(1)
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
// 5. resolve, reject, all
// Học 172 - 174

// var users = [
//     {
//         id: 1,
//         name: 'Quan',
//     },
//     {
//         id : 2,
//         name: 'Quan cao',
//     },
//     {
//         id: 3,
//         name: 'Cao',
//     }

// ];

// var coment = [
//     {
//         id : 1,
//         users_id:  1,
//         conten: 'Anh ra video chua',
//     },
//     {
//         id : 2,
//         users_id:  2,
//         coment : 'Vua ra em ơi',
//     }
// ];

// 1 lấy comments
// 2 từ comements lấy ra users_id
// từ users_id lấy ra user tương ứng

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(coment);
//         }, 1000);
//     });
// }

// function getUsesBuyIds(userIds) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIds.includes(user.id);
//         })

//         setTimeout(function() {
//             resolve(result)
//         }, 1000)
//     });
// };


// getComments()
//     .then(function(coment) {
//         var userIds = coment.map(function(coment) {
//             return coment.users_id;
//         });

//        return getUsesBuyIds(userIds)
//         .then(function(users) {
//             return {
//                 users :users,
//                 coment : coment,
//             };
//         });
        
//     }) 
    
//     .then(function(data) {
//         const backClo = document.getElementById('back--clo');
        
//         var html = '';
//         data.coment.forEach(function (coment) {
//             var user = data.users.find(function(user) {
//                 return user.id === coment.users_id;
//             });

//             html += `<li>${user.name} : ${coment.conten} </li>`;
//         });
//         backClo.innerHTML = html;
//     })





// Khái niệm Fetch : Rất quan trọng 

var postApi = 
    'https://jsonplaceholder.typicode.com/todos/1';

    // strem
fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        console.log(posts )
    })

//Sử dụng Postman làm việc với REST API : Quan trọng
// Công cụ : Postman
// CRUD
//  -Create : Tạo mới ->POST
//  - Read : Lấy giữ liệu -> GET
//  - Update: Chỉnh sửa -> PUT / PATCH
//  - Delete : Xóa -> DELETE
// Học lại 178 , 179    

// ES6

// Arrow function

const sum = (log) => {
    console.log(log);
}

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getprice() {
        return this.price;
    }
}

const PHP = new Course('PHP', 1000);

//Giá trị tham số mặc định

function logger(log, type = 'log' ) {
    console[type](log);
}

logger('Message...','erron')

// Enhanced object literals
// 1.Định nghĩa key : value cho bject
// 2.Định nghĩa methods cho object
// 3.Định nghĩa key cho object dưới dạng

var name = 'Javascript';
var price = 100;

var course = {
    name,
    price,
    getName() {
        return this.name;
    }
}


//Destructuring
var array = ['Javascript', 'PHP', 'Runy'];

var [a, b, c] = array;

// Rest
var [a,b, ...rest] = array

//2. object

var cousrses = {
    name: 'Javascrip',
    price: 100
}
var {name, price} = cousrses;

// xóa objcet
var {name, ...newObject} = cousrses;
// rest
function log({name,price,...rest}) {
    console.log(name);
    console.log(price);
}

log({
    name: 'Javascreip',
    price:100,
    descrion : 'Description content'
});

//Spread

var objcetdex = {
    api:'Bai-tạp-toan',
    khoahoc: 1000,
};

var deufull = {
    ...objcetdex,
    api: 'name'
};

//Modules
// import looger from 'javain.js';
// export deufull logger;

//Optional chaining

if(obj.cat?.cat2?.cat3);
if(obj?.cat?.cat2?.cat3);

Năng cao js

1.IIFE 


// API
let coursesApi = ' http://localhost:3000/courses';
let show = () => {
    getCourses(renderCourses);
    createCourses();
};
let getCourses = callback => {
    fetch(coursesApi)
        .then(response => response.json())
        .then(callback);
};
let renderCourses = courses => {
    let listCourses = document.querySelector('ul.list-courses');
    let showCourses = courses.map(course => {
        return `<li class="course-${course.id}">
            <h4>Tên Khoá Học: <span class="course-${course.id}" contenteditable="true">${course.name} </span></h4>
            <p>Mô Tả Khoá Học: <span class="course-${course.id}" contenteditable="true">${course.description}</span></p>
            <button name="delete" onclick="deleteCourse(${course.id})" >Xoá</button>
            <button name="update" onclick="updateCourse(${course.id})" >Sửa</button>
        </li>`
    })
    listCourses.innerHTML = showCourses.join('');
};
let createCourses = () => {
    let btnCreate = document.querySelector('button#btn-create');
    btnCreate.onclick = () => {
        let name = document.querySelector('input[name="name"]').value;
        let description = document.querySelector('input[name="description"]').value;
        let data = {
            name: name,
            description: description
        };
        handleCreateCourses(data, () => {
            getCourses(renderCourses);
        });
    }
};
let updateCourse = id => {
    let name = document.querySelector('h4 span.course-'+id).textContent;
    let description = document.querySelector('p span.course-'+id).textContent;
    let data = {
        name: name,
        description: description
    };
    handleUpdate(id,data,function(){
        getCourses(renderCourses);
    })
};

let handleUpdate = (id,data,callback) => {
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(coursesApi + '/' + id, options)
        .then(response => response.json())
        .then(callback);
};

let deleteCourse = id => {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(coursesApi + '/' + id, options)
        .then(response => response.json())
        .then(() => {
            document.querySelector('li.course-' + id).remove();
        });
};

let handleCreateCourses = (data, callback) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(coursesApi, options)
        .then(response => response.json())
        .then(callback);
}
show();

//Strict mode?

use strict : kiếm tra nghiêm ngặt

//parentNode