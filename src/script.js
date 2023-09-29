function setBank(bankName) {
	const chosenBank = document.getElementById('chosen-bank')
	chosenBank.textContent = bankName
}

// Range Utils
const totalFlowRangeElement = document.getElementById('total-flow')
const currentFlowValue = document.getElementById('current-flow-value')

// get current range value
currentFlowValue.textContent = totalFlowRangeElement.value

// update range value
totalFlowRangeElement.addEventListener('input', function () {
	currentFlowValue.textContent = totalFlowRangeElement.value
})