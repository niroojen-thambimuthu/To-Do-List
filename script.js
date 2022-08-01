function addItemToList(){
    // console.log("ITEM should be added!");

    let inputText = document.getElementById("itemForList").value;
    let tempList = document.createElement("li");
    let addToList = document.getElementById("listToDo");

    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = "X";
    closeBtn.addEventListener("click", function () {
    alert("Button is clicked");
    });
    // document.body.appendChild(btn);

    // item cannot be empty
    if(inputText !== ""){
        tempList.innerText = inputText;
        addToList.appendChild(tempList);
        addToList.appendChild(closeBtn);

    }

    // tempList.innerText = inputText;
    // console.log(inputText);
    // console.log(tempList);
    


    
}

let list = document.querySelector("ol");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("itemDone");
  }
}, false);



