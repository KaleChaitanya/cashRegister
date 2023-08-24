const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector('#check-button');
const userMessage = document.querySelector("#user-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
console.log(cashGiven.value);
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function showMessage(msg) {
    userMessage.style.display = "block";
    userMessage.innerText = msg;
    userMessage.style.color = "red";
}

function validateAmount() {
    userMessage.style.display = "none";
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
        }
        else {
            showMessage("Given cash is atleast equal to bill amount.");
        }
    }
    else {
        showMessage("Please enter valid amount.")
    }
}

function calculateChange(amountToBeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const returnAmount = Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn = amountToBeReturn % availableNotes[i];
        noOfNotes[i].innerText = returnAmount;
    }

}

checkButton.addEventListener("click", validateAmount)