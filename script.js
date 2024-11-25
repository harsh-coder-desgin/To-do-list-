let input = document.querySelector("#input");
console.log(input);

// let tasklist = document.querySelector("#task-list");
// console.log(tasklist);

let btn = document.querySelector("#btn");
console.log(btn);

a = input.value;

btn.addEventListener("click", myFunction);
function myFunction() { 
    // Log the input value 
    let a = input.value; 
    console.log(a);
     // Create a new UL element if it doesn't already exist 
     let ul = document.querySelector("#task-list"); 
     if (!ul) { 
         
        document.body.appendChild(ul); 
    } 
    // Create a new LI element 
    let li = document.createElement("LI"); 
    let t = document.createTextNode(a); 
    li.appendChild(t); 
    ul.appendChild(li); 
    // Clear the input field 
    input.value = ''; 
    let button = document.createElement('BUTTON');
    let text = document.createTextNode("delete");

    
    button.appendChild(text);
    li.appendChild(button);
    button.addEventListener("click", myFunction1);
    
    function myFunction1() {

        li.remove();
       
        
        
    }
}





// function myFunction() {
//     console.log(a);
    
    
// }





// var x = document.createElement("UL");
// x.setAttribute("id", "myUL");
// document.body.appendChild(x);

//   var y = document.createElement("LI");
//   var t = document.createTextNode.a
//   y.appendChild(t);
//   document.getElementById("myUL").appendChild(y);