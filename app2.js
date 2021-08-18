document.getElementById('case-plus').addEventListener('click', function () {

    const caseNumber = document.getElementById('case-number');
    const caseNumberValue = caseNumber.value;
    caseNumber.value = parseInt(caseNumberValue) + 1;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = caseNumber.value * 59;

})

document.getElementById('case-minus').addEventListener('click', function () {

    const caseNumber = document.getElementById('case-number');
    const caseNumberValue = caseNumber.value;
    if (caseNumberValue > 0) {
        caseNumber.value = parseInt(caseNumberValue) - 1;
    }
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = caseNumber.value * 59;
})