// //function averageNum(a,b){
//     //var average=(a+b) / 2;
//         //console.log
// //
// //averageNum(10,20,30);



// //function averageNum(a,b){
//     ////var average=(a+b) / 2;
//         //console.log(average)
//         //return average;


// //var globalVar =5; 4// global can be used anywhere

// //function someFunction(){
//     //var localVar = 10; //local





// //console.logath.round(8.5)//

// // var newString = 'Now I\'m a super "crazy" string';
// // if (newString.indexOf(:"missing"=== -1)){
// //     console.log("this word is not found")


// // var stringOne="abc"
// // var stringTwo="DEF"

// // console.log(stringOne<stringTwo);

// // var str3 = str.slice(2) 

// // var 

// var littleCar = new Object();

// littleCar.maxSpeed = 50;
// littleCar.driver = "Mario";
// console.log(littleCar.driver);

// littleCar.drive = function(){
//     console.log('car in motion');
// };
// littleCar.drive()

// var littleCar2 = {
//     maxSpeed: 50,
//     driver: "Mario",
//     drive: function(){
//         console.log("car in motion");
//     }
// };
// console.log(littleCar2.maxSpeed);
// littleCar2.drive()

// var littleCar2 = {
//     maxSpeed: 50,
//     driver: "Mario",
//     drive: function(speed,time){
//         console.log(speed * time);
//     },
//     logDriver: function(){
//         console.log(speed*time)
//     },
//     logDriver: function(){
//         console.log("driver name is " + this.driver)
//     }
//   };
  


// console.log(littleCar2.maxSpeed);
// littleCar2.drive(50,3)

// console.log(this);





// var littleCar3 = {
 
//     maxSpeed: 50,
//     driver: "Yoshi",
//     drive: function(speed,time){
//         console.log(speed * time);
//     },
//     test: function(){
//         console.log(this);
//     }
// }
// littleCar2.logDriver();
// littleCar3.test();
// console.log(littleCar2.maxSpeed)
// littleCar3.drive(55,2);


// var Car = function(maxSpeed, driver){
//    	  this.maxSpeed= maxSpeed;
//         this.driver = driver;
//         this.drive = function(speed,time){
//             console.log(speed * time);
//         };
//         this.logDriver = function(){
//             console.log("driver name is " + this.driver)
//         }
 
// }
// var littleCar = new Car(50,'Mario');

// var myCar = new Car(60, "John Wick")
// var myCar2 = new Car(60, "Jojo")
// var myCar3 = new Car(60, "Kanye")
// var myCar4 = new Car(60, "Home")




// var theDate = new Date();
// console.log(theDate)

// var pastDate = new Date(1545,2,9);
// var futureDate = new Date(2023,4,19);

var birthday= new Date(1987,3,15,11,15,25);
var birthday2 = new Date(1985,3,15,11,15,25)

    console.log(birthday.getMonth());
    console.log(birthday.getFullYear());
    console.log(birthday.getDate());
    console.log(birthday.getDay());
    console.log(birthday.getHours());
    console.log(birthday.getTime()); 

    

    if(birthday.getTime() == birthday2.getTime()){
        console.log("Birthday Buddies")
    } else{
        console.log("Birthdays aren't equal")
    }


