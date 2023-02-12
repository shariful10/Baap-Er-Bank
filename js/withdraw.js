// Step 1: Add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step 2: Get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');

    // Step 3: Get the value from the input field
    const newWithdrawAmountStr = withdrawField.value;

    // Step 4: Make sure to convert the input to a number by using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountStr);

    // Step 10: Clear the input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)){
        alert('Please Provide a Valid Number');
        return;
    }

    // Step 4: Get the current withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');

    // Step 5: Get the value from the withdraw input field
    const previousWithdrawTotalStr = withdrawTotalElement.innerText;

    // Step 6: Convert the input to a number by using parseFloat
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);

    // Step 8: Get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');

    // Step 9: Get the balance current total
    const previousBalanceTotalStr = balanceTotalElement.innerText;

    // Step 11: Convert the input to a number by using parseFloat
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr);
    if (newWithdrawAmount > previousBalanceTotal){
        alert('Insufficient Balance');
        return;
    }

    // Step 6: Calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // Step 7: Set the total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step 12: Get the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // Step 13: Set the new balance total
    balanceTotalElement.innerText = newBalanceTotal;
})