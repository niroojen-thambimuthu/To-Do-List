// add item to list
function addItemToList(){
    let inputText = document.getElementById("itemForList").value;
    let addToList = document.getElementById("listToDo");    
    let divItem = document.createElement("div");
    let tempList = document.createElement("li");
    let closeBtn = document.createElement("button");
    
    // item cannot be empty
    if(inputText !== ""){
        tempList.innerText = inputText;
        closeBtn.innerHTML = "X";
        divItem.appendChild(tempList);
        divItem.appendChild(closeBtn);
        addToList.appendChild(divItem);
    }
}

// cross list item
let list = document.querySelector("ol");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("itemDone");
  }
}, false);

// Delete list item
let clickBtn = document.querySelector("ol");
clickBtn.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.closest("div").classList.toggle("itemClose");
  }
});