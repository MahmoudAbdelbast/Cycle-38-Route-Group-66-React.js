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
    <div class="test col-8">
    <p id="productNameOutput" class="col-2"></p>
    <p id="productPriceOutput" class="col-2"></p>
    <p id="productCategoryOutput" class="col-2"></p>
    <p id="productDescOutput" class="col-2"></p>
    </div>
    <button onclick="editProduct();" class="btn btn-info col-2">Edit Product</button>
    <button onclick="delProduct();" class="btn btn-info col-2">Delete Product</button>`;
    document.getElementById('productNameOutput').innerHTML = product.name;
    document.getElementById('productPriceOutput').innerHTML = product.price;
    document.getElementById('productCategoryOutput').innerHTML = product.category;
    document.getElementById('productDescOutput').innerHTML = product.desc;
}

function editProduct() {
    var element = document.getElementById('btns');
    document.getElementById('btns').innerHTML = `
        <div class="test col-8">
            <input type="text" class="form-control my-3" id="product1NameInput" value="${product.name}" />
            <input type="number" class="form-control my-3" id="product1PriceInput" value="${product.price}" />
            <input type="text" class="form-control my-3" id="product1CategoryInput" value="${product.category}" />
            <input type="text" class="form-control my-3" id="product1DescInput" value="${product.desc}" />
        </div>
        <button onclick="addProduct();" class="btn btn-info col-2">Save Product</button>
        <button onclick="delProduct();" class="btn btn-info col-2">Delete Product</button>`;
}

function delProduct() {
    document.getElementById('btns').innerHTML = ``;
}