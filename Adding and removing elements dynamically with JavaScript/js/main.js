const list = document.getElementById("list")
const addItemButton = document.getElementById("addItem")
const removeItemButton = document.getElementById("removeItem")


// console.log(list.children.length)

// adding new list item
addItemButton.addEventListener("click", () => {
    const newItem = document.createElement("li")
    newItem.textContent = `Item ${list.children.length + 1}`
    list.appendChild(newItem)
    console.log(newItem)
})

// remove last list item
removeItemButton.addEventListener("click", () => {
    list.removeChild(list.lastChild)
})


/*
How to add new element:
1. createElement()
2. innerText/textContent add
3. appendChild
*/

/*
To remove items:
1. removeChild (konta remove korte hobe)
*/