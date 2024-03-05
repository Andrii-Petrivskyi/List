const addProduct = document.getElementById("addProduct");
const clearAll = document.getElementById("btnClear");
const deleteProduct = document.getElementById("btnDelete");

let product = 0;

addProduct.onclick = function() {
    const productName = document.getElementById("productField").value;
    document.getElementsByClassName("product")[0].className = "productVisible";
    document.getElementsByClassName("productName")[product].textContent = productName;

    product++;
};

clearAll.onclick = function() {
    for(let  i = product; i >= 0; i--) {
        document.getElementsByClassName("productVisible")[0].className = "product";
        document.getElementsByClassName("productName")[i].textContent = "";
    }
    product = 0;
}

deleteProduct.onclick = function() {
    
}