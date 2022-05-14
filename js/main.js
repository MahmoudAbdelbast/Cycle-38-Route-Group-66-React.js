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
            <p id="productNameOutput" class="col-3"></p>
            <p id="productPriceOutput" class="col-3"></p>
            <p id="productCategoryOutput" class="col-3"></p>
            <p id="productDescOutput" class="col-3"></p>
        </div>
        <div class="buttons col-4">
            <button onclick="editProduct();" class="btn btn-info col-5">Edit Product</button>
            <button onclick="delProduct();" class="btn btn-info col-5">Delete Product</button>
        </div>`;
    document.getElementById('productNameOutput').innerHTML = product.name;
    document.getElementById('productPriceOutput').innerHTML = product.price;
    document.getElementById('productCategoryOutput').innerHTML = product.category;
    document.getElementById('productDescOutput').innerHTML = product.desc;
    document.getElementById('inputForm').innerHTML = `
    <h2 class="fw-bolder my-2">Product Managment System</h2>

        <label for="productNameInput">ProductName :</label>
        <input type="text" class="form-control mb-3" id="productNameInput" value="" autofocus />

        <label for="productPriceInput">ProductPrice :</label>
        <input type="number" class="form-control mb-3" id="productPriceInput" value=""/>

        <label for="productCategoryInput">ProductCategory :</label>
        <input type="text" class="form-control mb-3" id="productCategoryInput" value=""/>

        <label for="productDescInput">ProductDesc :</label>
        <textarea type="text" class="form-control mb-3" id="productDescInput" placeholder="enter her your feedback"></textarea>
        <button onclick="   addProduct(); " class="btn btn-info">
            add Product
        </button>`;
}

function saveProduct() {
    var product = {
        name: product1NameInput.value,
        price: product1PriceInput.value,
        category: product1CategoryInput.value,
        desc: product1DescInput.value
    }
    document.getElementById('btns').innerHTML = `
    <div class="test col-8">
            <p  class="col-3">${product.name}</p>
            <p  class="col-3">${product.price}</p>
            <p  class="col-3">${product.category}</p>
            <p  class="col-3">${product.desc}</p>
        </div>
        <div class="buttons col-4">
            <button onclick="editProduct();" class="btn btn-info col-5">Edit Product</button>
            <button onclick="delProduct();" class="btn btn-info col-5">Delete Product</button>
        </div>`;
}

function editProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    document.getElementById('btns').innerHTML = `
        <div class="test col-8">
            <input type="text" class="form-control my-3 " id="product1NameInput" value="${product.name}" />
            <input type="number" class="form-control my-3 " id="product1PriceInput" value="${product.price}" />
            <input type="text" class="form-control my-3 " id="product1CategoryInput" value="${product.category}" />
            <input type="text" class="form-control my-3 " id="product1DescInput" value="${product.desc}" />
        </div>
        <div class="buttons col-4">
            <button onclick="saveProduct();" class="btn btn-info col-5">Save Product</button>
            <button onclick="delProduct();" class="btn btn-info col-5">Delete Product</button>
        </div>`;
}

var x = function delProduct() {
    document.getElementById('btns').innerHTML = ``;
}