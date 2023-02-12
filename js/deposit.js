// Step 1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step 2: Get the deposit amount from the deposit input field
    // For input field use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step 3: Get the current deposit total
    // For non-input (element other than input, textarea) use innerText to get the value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStr = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStr);

    // Step 4: Add number to the current deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal; 
    //Step 5: Get the balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalStr = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

    //Step 6: Calculate current tolal balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step 4: Clear the deposit field
    depositField.value = '';
})