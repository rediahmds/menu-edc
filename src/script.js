const mainMenuElement = document.getElementById('main-menu');

function setBank(bankName) {
  const chosenBank = document.getElementById('chosen-bank');
  chosenBank.textContent = bankName;
}

function setChosenOption(elementId, option) {
	const placeholder = document.getElementById(elementId)
	placeholder.textContent = option
	console.log(placeholder)
}

function createDropdownElement(counter, placeholder, dropdownItems) {
  const newMenu = `
			<div class="dropdown my-3">
  			<button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="${counter}">
    			${placeholder}
  			</button>
  			${dropdownItems}
			</div>
	`;
  mainMenuElement.innerHTML += newMenu;
}

function generateMenuWithTotalFlow(numberOfFlow) {
  for (let i = 1; i <= numberOfFlow; i++) {
    // createElements
    if (i === 1) {
      const props = {
        placeholder: 'Pilih jenis transaksi',
        dropdownItems: `
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'Sale')">Sale</a></li>
					<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'Transfer')">Transfer</a></li>
					<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'Investasi')">Investasi</a></li>
					<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
				</ul>
				`,
      };
      createDropdownElement(i, props.placeholder, props.dropdownItems);
    } else if (i === 2) {
      const inputAmountOfMoney = `
			<label for="amount-of-money">Masukkan uang yang ingin ditransaksikan</label>
			<div class="input-group mb-3">
  			<span class="input-group-text">Rp</span>
  			<input type="text" class="form-control" aria-label="Amount" id="amount-of-money">
  			<span class="input-group-text">.00</span>
			</div>
			`;
      mainMenuElement.innerHTML += inputAmountOfMoney;
    } else if (i === 3) {
      const inputPinElement = `
				<div class="form-floating mb-3">
					<input type="password" class="form-control" id="input-pin" required maxlength="6">
					<label for="input-pin">PIN</label>
				</div>
			`;
      mainMenuElement.innerHTML += inputPinElement;
    } else if (i === 4) {
      const props = {
        placeholder: 'Masukkan Kartu',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
      createDropdownElement(i, props.placeholder, props.dropdownItems);
    } else if (i === 5) {
      const props = {
        placeholder: 'Keluarkan Kartu',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
      createDropdownElement(i, props.placeholder, props.dropdownItems);
    } else if (i === 6) {
      const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
      createDropdownElement(i, props.placeholder, props.dropdownItems);
    } else if (i === 7) {
      const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
      createDropdownElement(i, props.placeholder, props.dropdownItems);
    } else if (i === 8) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 9) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 10) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 11) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 12) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 13) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 14) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 15) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 16) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 17) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 18) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 19) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    } else if (i === 20) {
			const props = {
        placeholder: 'Langkah selanjutnya',
        dropdownItems: `
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI A')">OPSI A</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI B')">OPSI B</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'OPSI C')">OPSI C</a></li>
						<li><a class="dropdown-item" href="#" onclick="setChosenOption(${i}, 'ATTENTION! PERLU PENYESUAIAN')">ATTENTION! PERLU PENYESUAIAN</a></li>
					</ul>
				`,
      };
			createDropdownElement(i, props.placeholder, props.dropdownItems)
    }
  }
}

// Range Utils
const totalFlowRangeElement = document.getElementById('total-flow');
const currentFlowValue = document.getElementById('current-flow-value');

// get current range value
currentFlowValue.textContent = totalFlowRangeElement.value;
let flowValue = parseInt(currentFlowValue.textContent);
generateMenuWithTotalFlow(flowValue);

// update range value
totalFlowRangeElement.addEventListener('input', function () {
  const mainMenuElement = document.getElementById('main-menu');
  mainMenuElement.innerHTML = '';
  currentFlowValue.textContent = totalFlowRangeElement.value;
  flowValue = parseInt(currentFlowValue.textContent);
  generateMenuWithTotalFlow(flowValue);
});
