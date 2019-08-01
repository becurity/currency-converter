var currencies = [
    {
        name: 'Canadian Dollar',
        rate: .76
    },
    {
        name: 'Pound',
        rate: 1.24
    },
    {
        name: 'Naira',
        rate: .028
    }
];
function getCurrencyName() {
    const selectElement = document.getElementById('converter');
    const currencyName = selectElement.value;
    return currencyName;
}
function getCurrencyValue() {
    const inputElement = document.getElementById('value1');
    const value = inputElement.value;
    return value;
}
function Calculate() {
    const currencyName = getCurrencyName();
    const currencyValue = getCurrencyValue();
    if (currencyValue === '') {
        return;
    }
    for(var i = 0; i < currencies.length; i++) {
        if (currencies[i].name === currencyName) {
            document.getElementById('value2').value = currencyValue * currencies[i].rate;
        }
    }
}
