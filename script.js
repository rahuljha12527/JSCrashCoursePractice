// // // // // // alert("Hello World");


// // // // // console.log("Hello World"); 

// // // // // console.error("This is an error");

// // // // // console.warn("This is a warn");


// // // // // let age=30;
// // // // // age=31;

// // // // // console.log(age);

// // // // // const  age=30;
// // // // // age=31;

// // // // // console.log(age);



// // // // // let score;

// // // // // score=30;
// // // // // console.log(score);


// // // // // const score;

// // // // // score=20;
// // // // // console.log(score);


// // // //     // String ,Numbers,Boolean,null,undefined
    
// // // //     // const name='Rahul';
// // // //     // const age=30;
// // // //     // const rating=4.5;
// // // //     // const isCool=true;
// // // //     // const  x=null;
// // // //     // const y=undefined;
// // // //     // let z;

// // // //     // console.log(typeof name);
// // // //     // console.log(typeof age);
// // // //     // console.log(typeof rating);
// // // //     // console.log(typeof isCool);
// // // //     // console.log(typeof x);
// // // //     // console.log(typeof y);
// // // //     //  console.log(z);


// // // //     // const name='Rahul';
// // // //     // const age=30;
    
// // // //     // // console.log('My name is ' + name +' and I am age' +age);

// // // //     // //Template String
    
// // // //     // console.log(`My name is ${name} and I am ${age}`);

// // // //     // const hello=`My name is ${name} and I am  ${age}`;

// // // //     // console.log(hello);



// // // //     // const s="Hello World";

// // // //     // // console.log(s.length);
// // // //     // // console.log(s.toUpperCase());
// // // //     // // console.log(s.toLowerCase());
// // // //     // // console.log(s.substring(0,6));


// // // //     // // console.log(s.substring(0,5).toUpperCase());

// // // //     // console.log(s.split(''));


// // // //     // const t='technology, computers ,it,code';

// // // //     // console.log(t.split(', '));



// // // //     // Arrays

// // // //     // const numbers=new Array(1,2,3,4,5);

// // // //     // console.log(numbers);

// // // // // const fruits=['apple','oranges','pears',10,true];

// // // // // fruits[3]="grapes";

// // // // // fruits.push('mangoes');
// // // // // fruits.unshift('strawberries');

// // // // // fruits.pop();

// // // // // console.log(Array.isArray(fruits));

// // // // // console.log(Array.isArray('hello'));

// // // // // console.log(fruits.indexOf('oranges'));

// // // // // console.log(fruits);

// // // // // console.log(fruits);


// // // // // const person={
// // // // //     firstName:'Rahul',
// // // // //     lastName:'Jha',
// // // // //     age:24,
// // // // //     hobbies:['music','movies','sports'],
// // // // //     address:{
// // // // //       street:'50 main st',
// // // // //       city:'Boston',
// // // // //       state:'MA'        
// // // // //     }

// // // // // }

// // // // // console.log(person.firstName,person.lastName);
// // // // // console.log(person.hobbies[1]);

// // // // // console.log(person.address.city);

// // // // // // const {firstName,lastName,address:{city}}=person;

// // // // // // console.log(firstName);

// // // // // // console.log(city);



// // // // // person.email="rahuljha@gmail.com";

// // // // // console.log(person);



// // // // // console.log(todos);
// // // // // console.log(todos[1].text);



// // // // // const todoJSON=JSON.stringify(todos);
// // // // // console.log(todoJSON);


// // // // // // For
// // // // // for(let i=0;i<10;i++){
// // // // //     console.log(`For loop Number: ${i}`);
// // // // // } 

// // // // // // While
// // // // // let i=0;
// // // // // while(i<10){
// // // // //     console.log(`While Loop Number:${i}`);
// // // // //     i++;
// // // // // } 


// // // // // for(let i=0;i<todos.length;i++){
// // // // //     console.log(todos[i]);
// // // // // }


// // // // // for(let todo of todos){
// // // // //     console.log(todo);
// // // // // }


// // // // // for(let todo of todos){
// // // // //     console.log(todo.text);
// // // // // }


// // // // // forEach .map,filter

// // // // // todos.forEach(function());


// // // // // const todos=[
// // // // //     {
// // // // //         id:1,
// // // // //         text:"Take out trash",
// // // // //         isCompleted:true
// // // // //     },
// // // // //     {
// // // // //         id:2,
// // // // //         text:"Meeting with boss",
// // // // //         isCompleted:true
// // // // //     },
// // // // //     {
// // // // //         id:3,
// // // // //         text:"Dentist appt",
// // // // //         isCompleted:false
// // // // //     },
// // // // // ];

// // // // // // for(let todo of todos){
// // // // // //     console.log(todo.id);
// // // // // // }



// // // // // // for(let i=0;i<=10;i++){
// // // // // //     console.log(`For Loop Number: ${i}`);
// // // // // // }


// // // // // // forEach,map,filter

// // // // // // todos.forEach(function(todo){
// // // // // //    console.log(todo.text);
// // // // // // });


// // // // // // const todoText=todos.map(function(todo){
// // // // // //     return todo.text;
// // // // // // });

// // // // // // const todoCompleted=todos.filter(function(todo){
// // // // // //      return todo.isCompleted===true;
// // // // // // });


// // // // // const todoCompleted=todos.filter(function(todo){
// // // // //     return todo.isCompleted===true;
// // // // // }).map(function(todo){
// // // // //     return todo.text;
// // // // // })

// // // // // console.log(todoCompleted);


// // // // const x=4;
// // // // const y=11;


// // // // if(x>5 && y>10){
// // // //     console.log('x is 10');
// // // // }else if(x>10){
// // // //   console.log('x is greater then 10');
// // // // }
// // // // else{
// // // //     console.log('x is less than 10');
// // // // }

// // // // const x=11;

// // // // const color='green';



// // // // switch(color){
// // // //    case  'red':
// // // //      console.log('color is red');
// // // //      break;
// // // //    case 'blue':
// // // //       console.log('color is blue');
// // // //       break;
// // // //     default:
// // // //         console.log('color is NOT red or blue'); 
// // // //         break;     
// // // // }


// // // // function addNums(num1=1,num2=2){
    
// // // //     return num1+num2;
// // // // }

// // // // const addNums=(num1=1,num2=2)=>{
// // // //     return num1+num2;
// // // // }

// // // const addNums=num1 => num1+5;


// // // console.log(addNums( 5));

// // // Constructor function
// // // function Person(firstName,lastName,dob){
// // //     this.firstName=firstName;
// // //     this.lastName=lastName;
// // //     this.dob=new Date(dob);
// // //     this.getBirthYear=function(){
// // //         return this.dob.getFullYear();
// // //     }

// // //     this.getFullName=function(){
// // //         return `${this.firstName} ${this.lastName}`;
// // //     }

// // // }

// // // Person.prototype.getBirthYear=function(){
// // //     return this.dob.getFullYear();
// // // }

// // // Person.prototype.getFullName=function(){
// // //     return `${this.firstName } ${this.lastName}`;
// // // }

// // // Class
// // // class Person{
// // //     constructor(firstName,lastName,dob){
// // //         this.firstName=firstName;
// // //         this.lastName=lastName;
// // //         this.dob=new Date(dob);
// // //     }

// // //     getBirthYear(){
// // //         return this.dob.getFullYear();
// // //     }

// // //     getFullName(){
// // //         return `${this.firstName} ${this.lastName}`;
// // //     }
// // // }
// // // // Instantiate object

// // // const person1=new Person('Rahul','jha','4-3-1980');
// // // const person2=new Person('Mary','Smith','3-6-1970');


// // // // console.log(person1);
// // // // console.log(person2.dob.getFullYear());

// // // // console.log(person1.getBirthYear());
// // // // console.log(person1.getFullName());
// // // console.log(person2.getFullName());



// // // console.log(person1);


// // // console.log(window);

// // // alert(1);

// // // console.log(document.getElementById('my-form'));

// // // const form=document.getElementById('my-form');
// // // console.log(form);

// // // console.log(document.querySelector('h1'));

// // // console.log(document.querySelectorAll('.item'));

// // // console.log(document.getElementsByClassName('item'));


// // // const items=document.querySelectorAll('.item');

// // // items.forEach((item)=>console.log(item));

// //  const ul=document.querySelector('.items');

// //  ul.children[1].innerText='Brad';

// //  ul.lastElementChild.innerHTML='<h4>Hello brother</h4>';

// // //  ul.remove();

// // //  ul.lastElementChild.remove();

// // ul.firstElementChild.textContent="Hello";


// // const btn=document.querySelector('.btn');
// // btn.style.background="red";


// const btn=document.querySelector('.btn');

// // btn.addEventListener('click',(e)=>{
// //     e.preventDefault();
// //     console.log(e.target.className);
// // });


// // btn.addEventListener('click',(e)=>{
// //     e.preventDefault();
// //     document.querySelector('#my-form')
// //     .style.background='red'
// //     document.querySelector('body').classList.add('bg-dark');

// //     document.querySelector('.items')
// //       .lastElementChild.innerHTML='<h1>Hello</h1>';


// // });



// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background='red'
//     document.querySelector('body').classList.add('bg-dark');

//     document.querySelector('.items')
//       .lastElementChild.innerHTML='<h1>Hello</h1>';


// });


// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background='red'
//     document.querySelector('body').classList.add('bg-dark');

//     document.querySelector('.items')
//       .lastElementChild.innerHTML='<h1>Hello</h1>';


// });


const myForm =document.querySelector('#my-form');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userList =document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value ==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all field';

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value='';
        emailInput.value='';

    }

}









 






























































