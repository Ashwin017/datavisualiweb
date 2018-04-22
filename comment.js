// Interaction - button click handler

window.onload = start;

function start(){
	init();
}

function init() {
    var button = document.getElementById("submitbutton");
    
    button.onclick = handleButtonClick;
}


// getting text inputs from the Visitors form  

function handleButtonClick() {
    var UserName = document.getElementById("txtName").value;
    
    var UserComment = document.getElementById("txtComment").value;
    
    if (UserName!="" && UserComment!="") { // if statement used to validate form     
        var userFeedback = UserName + ": " + UserComment; // concatenating the two variables 

        var li = document.createElement("li");

        li.innerHTML = userFeedback;

        var ul = document.getElementById("listofusers");

        ul.appendChild(li);
    } else {
        alert ("Name & Comment must be filled out"); // Display JavaScript alert  
    }
}


