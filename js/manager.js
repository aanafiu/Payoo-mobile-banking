

// Add Money
document.getElementById("addMoneyBtn").addEventListener('click', function(event){
    event.preventDefault();

    const bankList = getValue('bankList');
    const accountNumber = getValue('loginNumber');
    const accountPass = getValue('loginPass');
    const newBalance = getValue('addNewBalance');

    if(!isNaN(accountNumber)  && accountNumber.toString().length === 11 && accountPass.toString().length === 4 && parseFloat(newBalance) > 0)
    {
        const presentBalance = document.getElementById('mainBalance').innerText;
       
        // console.log(presentBalance, newBalance);
        const addBalance = document.getElementById('mainBalance');

        addBalance.innerText = parseFloat(presentBalance) + parseFloat(newBalance);

        addNewTransaction('deposit', bankList, newBalance);
        
    }
    else
    {
        alert("Give Proper Information")
    }
    
})

console.log("i am cashout");
// Cash Out
document.getElementById('cashoutBtn').addEventListener('click', function(event){
    event.preventDefault();

    const agentNumber = getValue('agentNumber');
    const cashoutAmount = getValue('cashoutAmount');
    const withdrawPass = getValue('withdrawPass');
    const presentBalance = document.getElementById('mainBalance').innerText;


    if( !isNaN(agentNumber)  && agentNumber.toString().length === 11 && withdrawPass.toString().length === 4 && parseFloat(presentBalance) > parseFloat(cashoutAmount))
        {
            
            // console.log(presentBalance, newBalance);
            const addBalance = document.getElementById('mainBalance');
    
            addBalance.innerText = parseFloat(presentBalance) - parseFloat(cashoutAmount);
    
            addNewTransaction('cashout', agentNumber, cashoutAmount);
            
        }
        else
        {
            alert("Give Proper Information")
        }
})