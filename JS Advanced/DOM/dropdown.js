function addItem() {
    let text1 = document.getElementById("newItemText").value;
    let text2 = document.getElementById("newItemValue").value;

    let node = document.createElement("option");
    node.textContent = text1;
    node.value = text2;

    document.getElementById("menu").appendChild(node);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";

}