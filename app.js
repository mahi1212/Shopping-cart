function updateCaseNumber(product, isIncreasing){
    const caseInput = document.getElementById(product + '-number')
    const caseNumber = caseInput.value
    const casePrice = document.getElementById(product + '-price')
    const casePriceText = casePrice.innerText

    if(isIncreasing == true){
        caseInput.value = parseInt(caseNumber) + 1
        if((product + '-price') == 'case-price'){
            casePrice.innerText = parseFloat(casePriceText) + 59 ;
        }else{
            casePrice.innerText = parseFloat(casePriceText) + 1219 ;
        }
    }
    else if(caseNumber > 0){
        caseInput.value = parseInt(caseNumber) - 1
        if((product + '-price') == 'case-price'){
            casePrice.innerText = parseFloat(casePriceText) - 59 ;
        }else{
            casePrice.innerText = parseFloat(casePriceText) - 1219 ;
        }
    }
    // Calculate total
    totalCalculate();    
}

// phone function
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone' , false)
})
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', true)
})

// Casing function
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case', true)
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case',false)
})

// Total calculation
function totalCalculate(){
    const phonePrice = document.getElementById('phone-price')
    const casePrice = document.getElementById('case-price')
    const phonePriceText = phonePrice.innerText
    const casePriceText = casePrice.innerText
    // updating total price
    const totalPrice = parseFloat(phonePriceText) + parseFloat(casePriceText) ;
    document.getElementById('sub-total').innerText = totalPrice;
    // updating tax at 7% rate
    const tax = totalPrice / 7;
    document.getElementById('tax-amount').innerText = Math.round(tax);
    // setting total amount
    const textAmount = document.getElementById('tax-amount').innerText;
    const textAmountValue= parseFloat(textAmount);

    document.getElementById('total-price').innerText = textAmountValue + totalPrice;

}


