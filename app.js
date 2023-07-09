const groceryList = document.getElementById("grocery-list");
let listItemValue = document.getElementById("list-item-value");
const submit = document.getElementById("submit");
listItemValue.addEventListener("focus",function(){
    this.style.border = "6px solid lightskyblue";
});
listItemValue.addEventListener("blur",function(){
    this.style.border = "2px solid black";
});
submit.addEventListener("click", function() {
    addItem();
})
const addItem = () =>{
    if(listItemValue.value !== ""){
        let listItem = document.createElement("li");
        let span = document.createElement("span");
        let deleteItem = document.createElement("button");
        let editItem = document.createElement("button");
        span.textContent = listItemValue.value;
        listItem.appendChild(span);
        deleteItem.innerText = "delete";
        deleteItem.className = "buttons";
        deleteItem.addEventListener("click",function(event){
            event.target.parentElement.remove();
        })
        listItem.appendChild(deleteItem);
        editItem.innerText = "edit";
        editItem.className = "buttons";
        editItem.addEventListener("click",function(event){
            listItemValue.value = event.target.previousSibling.previousSibling.innerText;
            event.target.parentElement.remove();
        })
        listItem.appendChild(editItem);
        groceryList.appendChild(listItem);
        listItemValue.value = "";  
    }
};

const delItems = () =>{
    for(let i=0; i < groceryList.childElementCount;i++){
        groceryList.remove(groceryList.children[i]);
    };
};