function addItemToList(){
    // console.log("ITEM should be added!");

    let inputText = document.getElementById("itemForList").value;
    let tempList = document.createElement("li");
    let addToList = document.getElementById("listToDo");

    let divItem = document.createElement("div");
    let closeBtn = document.createElement("button");
    closeBtn.innerHTML = "X";
    // document.body.appendChild(btn);

    // item cannot be empty
    if(inputText !== ""){
        tempList.innerText = inputText;
        // divItem.appendChild(addToList);
        addToList.appendChild(tempList);
        addToList.appendChild(closeBtn);
        // console.log(addToList);
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


let clickBtn = document.querySelector("ol");

clickBtn.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("itemClose");
  }
  // console.log("Button is clicked");
});