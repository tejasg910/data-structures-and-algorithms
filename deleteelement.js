// console.log('this is element ')

let  arr = [2, 23, 532, 23,5,323, 63,232];



//here is how we can do is manually 
const deleteelement =()=>{
    console.log(arr)
    let p = document.getElementById('delposition').value;
    let np = parseInt(p)
console.log(p)
    for (let index = np; index < arr.length; index++) {
      
        arr[index] = arr[index+1]
        
    }
    
    
    arr.length = arr.length-1;

    console.log(arr)
}
//now lets see a function for the procedure 


// arr.splice(4, 1)


