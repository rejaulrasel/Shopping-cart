//update product
function updateProduct(product, isIncreasing, price) {
    //acces the proper id through parameter
    const productNumber = document.getElementById(product + '-number');
    const productInput = productNumber.value;
    if (isIncreasing) {
        productNumber.value = parseInt(productInput) + 1;
    }
    else {
        if (productInput > 0) {
            productNumber.value = parseInt(productInput) - 1;
        }
    }

    //update product price
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber.value * price;

    //this function will work for every event handler,thats why it called from here
    calculateAllCost()
}
//get phone && case input number
function getInput(product) {
    const input = document.getElementById(product + '-number');
    const inputText = input.value;
    const inputNumber = parseInt(inputText);
    return inputNumber;
}
//calculate total bill
function calculateAllCost() {
    const phoneNumber = getInput('phone');
    const caseNumber = getInput('case');
    const subTotal = (phoneNumber * 1219) + (caseNumber * 59);
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}


document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', true, 59);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', false, 59);


})
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', true, 1219);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', false, 1219);

})
