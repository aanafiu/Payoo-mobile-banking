console.log("i am universal23");
document.getElementById("addMoneyBtn").addEventListener('click', function(event){
    event.preventDefault();

    const bankList = getValue('bankList');
    const accountNumber = getValue('loginNumber');
    const accountPass = getValue('loginPass');
    const newBalance = getValue('addNewBalance');

    if(!isNaN(accountNumber)  && accountNumber.toString().length === 11 && accountPass.toString().length === 4 && parseFloat(newBalance) > 0)
    {
        const presentBalance = document.getElementById('mainBalance').innerText;
       
        console.log(presentBalance, newBalance);
        const addBalance = document.getElementById('mainBalance');

        addBalance.innerText = parseFloat(presentBalance) + parseFloat(newBalance);

        addNewTransaction('deposit', bankList, newBalance);
        
    }
    else
    {
        alert("Give Proper Information")
    }
    
})