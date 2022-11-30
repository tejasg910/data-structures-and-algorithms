//insertion using the normal function 
//taking the input from the user input tag 

//lets implement first 
//question: insert the given element at given position and use your own algorithm 

let position = 3;
let element  = 10;
//here position is 3 it means at place of 52 
let arr = [32,323,212,52,62,22,632];
console.log(arr)

for (let i = arr.length-1; i >= position; i--) {
 
    arr[i+1] = arr[i];
    if(i==position){
        arr[i]=element;
    }


}



function insert(){
let arr = [32,323,212,52,62,22,632];
    console.log(arr)
    let position = document.getElementById('addposition').value;
    let element = document.getElementById('addelement').value;
    element = parseInt(element);

for (let i = arr.length-1; i >= position; i--) {
 
    arr[i+1] = arr[i];
    if(i==position){
        arr[i]=element;
    }


}
console.log(arr)

}
console.log(arr)

// let newArr = [32, 323,212, 10, 52,62,22,632];




//how you will tackle this situation using the library function or javascript predefined function 


//the answer is splice method 

// we are updating the array not changing the type of the array 


const newArr = [1,24,5,52,6,37,8];

newArr.splice(2, 0, 5323)
console.log(newArr)
