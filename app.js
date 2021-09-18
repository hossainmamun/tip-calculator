
const billAmount = document.getElementById('bill-amount');
const tipAmount = document.getElementById('tip-amount');
const shardBill = document.getElementById('shard-amount');
const tipResult = document.getElementById('tip-result');
const totalBillResult = document.getElementById('total-bill-result');
const result = document.getElementById('result');
const shardBillResult = document.getElementById('shard-bill-amount')

result.addEventListener('click', () => {
    const billAmountParse = parseFloat(billAmount.value);
    const tipAmountParse = parseFloat(tipAmount.value);
    const shardBillParse = parseFloat(shardBill.value);

    if (isNaN(billAmountParse) || billAmountParse <= 0) {
        alert('Must Enter Positive Value');
    }

    else if (isNaN(tipAmountParse) || tipAmountParse <= 0) {
        alert('Tip Amount Must Be Assign with Positive Value')
    }

    else {
        const totalTip = billAmountParse * (tipAmountParse / 100);
        tipResult.innerHTML = `${totalTip.toFixed(2)} tk only`;

        const finalResult = billAmountParse + totalTip;
        totalBillResult.innerHTML = `${finalResult.toFixed(2)} tk only`;

        if (isNaN(shardBillParse) || shardBillParse == 0) {
            shardBillResult.innerHTML = `${finalResult.toFixed(2)} tk only`;
        }
        else {
            const finalShardBill = finalResult / shardBillParse;
            shardBillResult.innerHTML = `${finalShardBill.toFixed(2)} tk only`;
        }
    }
})