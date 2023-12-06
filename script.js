const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')

const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')

const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const HOST = 'api.frankfurter.app'
const calculate = () => {
	fetch(`https://${HOST}/latest?from=${currencyOne.value}&to=${currencyTwo.value}`)
		.then(resp => resp.json())
		.then(data => {
			const currency1 = currencyOne.value
			const currency2 = currencyTwo.value
			const rate = data.rates[currency2]
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
			amountTwo.value = (amountOne.value * rate).toFixed(2)
		})
}

const swap = () => {
	const temp = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = temp
	calculate()
}

calculate()
swapBtn.addEventListener('click', swap)
amountOne.addEventListener('input', calculate)
currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
