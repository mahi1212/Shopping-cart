function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number')
    const caseNumber = caseInput.value
    const casePrice = document.getElementById('case-price')
    const casePriceText = casePrice.innerText


    if(isIncreasing == true){
        caseInput.value = parseInt(caseNumber) + 1
        casePrice.innerText = parseFloat(casePriceText) + 59 ;
    }
    else if(caseNumber > 0){
        caseInput.value = parseInt(caseNumber) - 1
        casePrice.innerText = parseFloat(casePriceText) - 59 ;
    }

    
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true)
    // const caseInput = document.getElementById('case-number')
    // const caseNumber = caseInput.value
    // caseInput.value = parseInt(caseNumber) + 1
    // const casePrice = document.getElementById('case-price')
    // const casePriceValue = casePrice.innerText
    // casePrice.innerText = parseFloat(casePriceText) + 59 ;

})

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false)
})


