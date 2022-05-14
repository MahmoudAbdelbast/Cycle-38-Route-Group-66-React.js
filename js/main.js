var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');



function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    document.getElementById('btns').innerHTML = `
    <p id="productNameOutput" class="col-2"></p>
    <p id="productPriceOutput" class="col-2"></p>
    <p id="productCategoryOutput" class="col-2"></p>
    <p id="productDescOutput" class="col-2"></p>
    <button onclick="editProduct();" class="btn btn-info col-2">Edit Product</button>
    <button onclick="delProduct();" class="btn btn-info col-2">Delete Product</button>`;
    document.getElementById('productNameOutput').innerHTML = product.name;
    document.getElementById('productPriceOutput').innerHTML = product.price;
    document.getElementById('productCategoryOutput').innerHTML = product.category;
    document.getElementById('productDescOutput').innerHTML = product.desc;
}

function editProduct() {
    var addedProduct = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    var element = document.getElementById('btns');
    element.classList.add('edited');
    document.getElementById('btns').innerHTML = `
    <input type="text" class="form-control my-3" id="product1NameInput" value="${addedProduct.name}" />
    <input type="number" class="form-control my-3" id="product1PriceInput" value="${addedProduct.price}" />
    <input type="text" class="form-control my-3" id="product1CategoryInput" value="${addedProduct.category}" />
    <input type="text" class="form-control my-3" id="product1DescInput" value="${addedProduct.desc}" />
    <button onclick="editProduct();" class="btn btn-info col-2">Edit Product</button>
    <button onclick="delProduct();" class="btn btn-info col-2">Delete Product</button>`;
}

function delProduct() {
    document.getElementById('btns').innerHTML = ``;
}