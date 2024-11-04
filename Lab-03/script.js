function calculateTip() {
    let amount = document.getElementById('amount').value;
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const currency = document.getElementById('currency').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.innerText = '';

    // Validate the amount: it should be a non-negative number
    if (isNaN(amount) ||  amount < 0) {
        errorMessage.innerText = 'Please enter a valid amount.';
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalAmount').value = '';
        document.getElementById('displayTipPercentage').value = '';
        return;
    }   
    console.log(amount);
    amount = parseFloat(amount);
    // Calculate the tip amount in USD
    let tipAmount = (amount * tipPercentage) / 100;
    let totalAmount = amount + tipAmount;

    if (isNaN(tipAmount)){
        errorMessage.innerText = 'Please enter a valid amount.';
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalAmount').value = '';
        document.getElementById('displayTipPercentage').value = '';
        return;
    }

    let conversionRate =1;
    if (currency === 'INR') {
        conversionRate = 84.07; 
    } else if (currency === 'JPY') {
        conversionRate = 149.34; 
    }

    // Convert tip and total amounts to selected currency
    tipAmount = tipAmount * conversionRate;
    totalAmount = totalAmount * conversionRate;

    //display values
    document.getElementById('tipValue').innerText = tipPercentage;
    document.getElementById('tipAmount').value = tipAmount.toFixed(2) 
    document.getElementById('totalAmount').value = totalAmount.toFixed(2) 
    document.getElementById('displayTipPercentage').value = tipPercentage; 
}
