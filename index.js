// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.log(document.body.childNodes)


// let Head = document.getElementById("heading")
// Head.style.color = "blue";
// Head.style.backgroundColor = 'black';
// Head.style.fontSize = "65px";
// Head.style.border = "4px solid orange";

// let paragraph = document.getElementsByClassName("para")

// paragraph[2].innerHTML = "DOM Manipulation"
// paragraph[0].style.color = "orange";
// paragraph[0].style.backgroundColor = "yellow"
// paragraph[1].style.color = "green";
// paragraph[1].style.backgroundColor = "black"
// paragraph[1].style.fontSize = "65px";

// let collection = document.getElementsByClassName("container")
// collection[1].style.color = "brown"

// let collect = document.getElementsByTagName("li")
// document.getElementById("demo").innerHTML = collect[1].innerHTML
// document.getElementById("demo").innerHTML = collect[2].innerHTML

// function changecolor(newcolor){
//     const btn = document.getElementById("para")
//     btn.style.color = newcolor
// }
// document.querySelector("p").style.backgroundColor = "pink" 






// class 2 
// const elements = document.getElementById("intro");

// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + elements.innerHTML;



// const element = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + element[0].innerHTML;


// //  for div (id)
// const x = document.getElementById("main");
// const y = x.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// //  for div (by classname . for class we also assign indexes bcz classes are many)
// const a = document.getElementsByClassName("container")
// const firstpara = a[0]
// const b = firstpara.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) inside "container" is:  ' + b[0].innerHTML;

// const x = document.getElementsByClassName("intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;


// const x = document.querySelectorAll("p.intro");
// document.getElementById("demo").innerHTML = 
// 'The first paragraph (index 1) with class="intro" is: ' + x[1].innerHTML;


//  set time out function
// document.write ("hellow world")
// setTimeout(() => {
//      alert ("I am inside set time out")
// }, 3000);



// class 3

// let button = document.getElementById("btn")
// button.addEventListener("click",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("contextmenu",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("dblclick",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mousedown",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseenter",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseleave",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// button.addEventListener("mouseout",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })
// button.addEventListener("mouseup",() =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// })

// ................keyboard events...............
// button.addEventListener("keydown",(e) =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
//      console.log(e .key);
// })

// button.addEventListener("keyup",(e) =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// console.log(e .key);
// })
// button.addEventListener("keypress",(e) =>{
//      document.querySelector(".container").innerHTML = "<b> yay you have click </b> enjoy your click"
// console.log(e .key);
// })

// function myFunction(){
//      let y = document.getElementById ("fname");
//      y.value = y.value.toUpperCase();
// }
// function myfunction1(){
//       alert("you pressed a key inside a box")
// }
// function myfunction2(){
//     document.getElementById ("email").innerHTML = "you pressed a key inside it"
//     document.getElementById ("email").style.color = 'red'
// }






// class 4
// wed
// for each loop . hum apna function pass kr rhy  used for  ararys  item or index js ko pta hota h k arrays k liye kaam horha ha


// let text ="";
// const fruits = ["apple","orange","peach","mango"];
// fruits.forEach(myFruits)
// document.write(text);

// function myFruits(item ,index) {
//     text = text +index+ ":"+item + "<br>"
// }

// let sum = 1;
// const number = [1, 2, 3, 4]
// number.forEach(myNumber);
// document.write(number)

// function mynumber(item){
  
//     sum = sum + item;

// }
// function myNumber(item , index , arr){
//      arr[index] = item * 20; 
// }



// RANDOM COLOR GENERATOR
// function RandomColor(){
//     let val1 = Math.ceil(200 + Math.random() * 255);
//     let val2 = Math.ceil(200 + Math.random() * 255);
//     let val3 = Math.ceil(200 + Math.random() * 255);
//    return `rgb(${val1},${val2},${val3})`;
// }

// // refernce k liye dollar sign zruri h

// setInterval(() => {
//       document.querySelector("body").style.background = RandomColor();

// }, 1000);

// create a togle button tahat change a screen to dark mode when clicked and light mode when clicked again

let modeBtn = document.querySelector("#mode");
let currentMode = "light";

modeBtn.addEventListener("click", () =>{
    if(currentMode === "light"){
        currentMode = "dark"
        document.querySelector("body").style.backgroundColor= "black";
    }
    else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor= "white";
    }
    console.log(currentMode);
})
