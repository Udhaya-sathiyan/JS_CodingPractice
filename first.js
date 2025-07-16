

// var button = document.querySelector("button")
// var grid = document.querySelector(".grid")
// var secButton = document.querySelector(".second-button")
// var count = document.querySelector(".boxcount");
// var thirdBtn = document.querySelector(".thirdBtn")


// button.addEventListener("click", () => {
//     var theElement = document.createElement("div")
//     theElement.classList.add("box")
//     theElement.textContent = "I'm the box"
//     grid.appendChild(theElement);

//     count.innerHTML = (grid.querySelectorAll(".box").length)


// })

// thirdBtn.addEventListener("click",()=>{
//     var content = document.createElement("div");
//     content.setAttribute("class","thecontent")
//     var newElement = document.createElement("div");
//     newElement.setAttribute("id","newid");
//     newElement.textContent = "I'm Your New Content "
//     content.appendChild(newElement);
//     console.log(content)
//     document.body.append(content)
// })





// secButton.addEventListener("click", () => {
//     if (grid.querySelector("div")) {
//         grid.querySelector("div").remove()

//     }
//     count.innerHTML = (grid.querySelectorAll(".box").length)

// })


// 


// var InputName = console.log(document.getElementById("InputName").value);

// var Email = document.getElementById("email").value;

// var TotalMarks = document.getElementById("totalmarks").value;

// var YourMarks = document.getElementById("yourmarks").value;



// var submit = document.querySelector(".submit");

// var Average = YourMarks/TotalMarks
// console.log(InputName.value)

// submit.addEventListener("click",()=>{


//     var results = document.createElement("div");
//     results.setAttribute("id","youresults");
//     results.textContent = "${InputName} ${Average}"
//     document.body.append(results)   

// })




// var form = document.querySelector(".form-box");

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     var InputName = document.getElementById("InputName").value;
//     var Email = document.getElementById("email").value;
//     var TotalMarks = document.getElementById("totalmarks").value;
//     var YourMarks = document.getElementById("yourmarks").value;

//     var Average = (YourMarks / TotalMarks) * 100;

//     var results = document.createElement("div");
//     results.setAttribute("id", "youresults");
//     results.textContent = `${InputName}, your score is ${Average.toFixed(2)}%`;

//     document.body.append(results);
// });






var NavButton = document.querySelector(".btn");
var NavContent = document.getElementById("NavContent");


function menu() {
    if (NavContent.classList.contains("show")) {
        NavContent.classList.remove("show");
    }
    else {
        NavContent.classList.add("show");
    }
}







// NavContent.style.color = 'blue';
// NavContent.style.backgroundColor = 'lightgray';
// NavContent.style.fontSize = '16px'; 
// NavContent.style.height = '120px';



// NavButton.addEventListener("click",()=>{
//   NavContent.style.display = 'block'
// })



