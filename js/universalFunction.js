// console.log("i am universal");
function getValue(id)
{
    const idValue = document.getElementById(id).value;
    return idValue;
    // console.log("i am universal1");
}


function addNewTransaction(typeOfWay,bankList, balance)
{

    if(typeOfWay === 'deposit')
    {
        const transactionText = document.getElementById('listOfTransaction');

        const newText = document.createElement('div');
        newText.innerHTML = `
                         <div class="flex justify-between items-center gap-2 text-base bg-white rounded-xl p-2">
                            <div class="flex justify-center items-center gap-2">
                                <img src="./assets/wallet.png" alt="">
                            <h1 class="uppercase grow" >${typeOfWay}</h1>
                            </div>
                            <h1>${bankList} <br> Bank</h1>
                            <h1 class="font-extrabold text-green-500">+${balance} Taka</h1>
                        </div>
        `;
        transactionText.appendChild(newText);
        
    }
    else  if(typeOfWay === 'cashout')
        {
            const transactionText = document.getElementById('listOfTransaction');
    
            const newText = document.createElement('div');
            newText.innerHTML = `
                             <div class="flex justify-between items-center gap-2 text-base bg-white rounded-xl p-2">
                                <div class="flex justify-center items-center gap-2">
                                    <img src="./assets/wallet.png" alt="">
                                <h1 class="uppercase grow" >${typeOfWay}</h1>
                                </div>
                                <h1>${bankList} <br> Agent</h1>
                                <h1 class="font-extrabold text-red-500">-${balance} Taka</h1>
                            </div>
            `;
            transactionText.appendChild(newText);
            
        }
}


// button toggle

document.getElementById("addMoney").addEventListener("click", function(){

    document.getElementById("addMoneySection").classList.remove("hidden");

    document.getElementById("transactionSection").classList.add("hidden");
    document.getElementById("transaction").classList.remove("active");
    document.getElementById("cashOutMoney").classList.remove("active");
    document.getElementById("cashoutSection").classList.add("hidden");
    const clr = document.getElementById("addMoney");
    // console.log(clr.classList.contains("active"));
    if(clr.classList.contains("active"))
    {
        clr.classList.remove("active");
    }
    else{
        clr.classList.add("active");
    }
    

})
document.getElementById("cashOutMoney").addEventListener("click", function(){

    document.getElementById("cashoutSection").classList.remove("hidden");
    document.getElementById("addMoneySection").classList.add("hidden");
    document.getElementById("transactionSection").classList.add("hidden");
    document.getElementById("transaction").classList.remove("active");
    document.getElementById("addMoney").classList.remove("active");

    const clr = document.getElementById("cashOutMoney");
    // console.log(clr.classList.contains("active"));
    if(clr.classList.contains("active"))
    {
        clr.classList.remove("active");
    }
    else{
        clr.classList.add("active");
    }
    
})

document.getElementById("transaction").addEventListener("click", function(){

    document.getElementById("addMoney").classList.remove("active");
    document.getElementById("cashOutMoney").classList.remove("active");
    document.getElementById("cashoutSection").classList.add("hidden");
    document.getElementById("addMoneySection").classList.add("hidden");

    document.getElementById("transactionSection").classList.remove("hidden");

    const clr = document.getElementById("transaction");
    // console.log(clr.classList.contains("active"));
    if(clr.classList.contains("active"))
    {
        clr.classList.remove("active");
    }
    else{
        clr.classList.add("active");
    }
    
    
})