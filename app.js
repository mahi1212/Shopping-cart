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


