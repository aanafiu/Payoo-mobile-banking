console.log("i am universal");
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
}