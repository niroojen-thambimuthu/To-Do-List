function addItemToList(){
    console.log("ITEM should be added!");

    let inputText = document.getElementById("itemForList").value;
    let tempList = document.createElement("li");
    tempList.innerText = inputText;
    console.log(inputText);
    console.log(tempList);
    document.getElementById("listToDo").appendChild(tempList);
}