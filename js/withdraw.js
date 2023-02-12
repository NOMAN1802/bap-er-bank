// step1- add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function(){
// get the withdraw amount from the input field

const withdrawField = document.getElementById('withdraw-field');
const newWithDrawAmountString = withdrawField.value;

// step-2.5 also make sure to convert the input in to a number using parseFloat 
const newWithDrawAmount = parseFloat(newWithDrawAmountString);

//step-7: clara the input field
withdrawField.value = '';

if(isNaN(newWithDrawAmount)){
    alert('provide a valid number');
    return;
}

// step-3: get previous withdraw total 
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//step-5: get the previous balance total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);



// validation 

if(newWithDrawAmount > previousBalanceTotal){
    alert('Baap Bank a eto taka nai')
    return;
}



// step-4: calculate total withdraw amount 
const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

// step-4.5: set total withdraw amount 
withdrawTotalElement.innerText = currentWithdrawTotal;




// step-6: calculate new balance total
const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;


// step-6.5: set the new balance total
balanceTotalElement.innerText = newBalanceTotal;



})