function addItemToList(){
    // console.log("ITEM should be added!");

    let inputText = document.getElementById("itemForList").value;
    let tempList = document.createElement("li");
    let addToList = document.getElementById("listToDo");

    // item cannot be empty
    if(inputText !== ""){
        tempList.innerText = inputText;
        addToList.appendChild(tempList);
    }

    // tempList.innerText = inputText;
    // console.log(inputText);
    // console.log(tempList);
    

    
}