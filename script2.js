const addItem = ()=>{
    alert("The button has been clicked!!");

    let item = document.getElementById("item").value;

    let cleanedItem = item.trim();

    if(!cleanedItem){
        alert("Please enter your Item!");
        return;
    }

    let list = document.getElementById("list"); //ul
    /*
    A list works like this!!!!!!!!

    <ul>
        <li>cleanedItem</li>
    </ul>

     */
    let li  = document.createElement("li"); //li

    li.innerHTML = cleanedItem;

    list.appendChild(li);

    alert("Successfully added the Item!!!!");

    document.getElementById("item").value = "";
    return;
}


const removeItem = ()=>{
    alert("The button has been clicked!!!");

    let item = document.getElementById("item").value;

    let cleanedItem = item.trim().toLowerCase();

    if(!cleanedItem){
        alert("Please enter your item!");
        return;
    }

    let list = document.getElementById("list");

    let tags = list.getElementsByTagName("li");

    if(tags.length ===0){
        alert("Nothing was added yet");
        return;
    }

    let isremoved = false;
    let itemRemoved = 0;

    for(let i = 0 ; i < tags.length ; i ++){

        if(tags[i].innerHTML.toLowerCase() === cleanedItem){

            let removedItem = tags[i].innerText;

            list.removeChild(tags[i]);

            isremoved = true;

            itemRemoved ++;

            let removedHtml  = document.getElementById("removed-item");

            if(!removedHtml){
                removedHtml = document.createElement("p");

                removedHtml.id = "removed-item";

                document.body.appendChild(removedHtml);
            }

            removedHtml.innerHTML = `Item removed: ${removedItem} (${itemRemoved})`;

            document.querySelector("h1").innerHTML =`My To-Do List -- (Items removed ${itemRemoved})`;

            alert("Successfully removed the item!");
            return;
        }
    }

    if(!isremoved){
        alert("Item does not exists!!!");
        return;
    }

}

document.getElementById("add").addEventListener("click" , addItem);
document.getElementById("remove").addEventListener("click" , removeItem);