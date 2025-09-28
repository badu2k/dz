function currencyTransfer(cash, currency1, currency2) {
	const dollarToRuble = 80;
	const rubleToDollar = 1/80;
	const eurotoRuble = 90;
	const rubletoEuro = 1/90;
	const dollarToEuro = 80/90;
	const euroToDollar = 90/80;
	switch(true) {
		case currency1 === 'dollar' && currency2 === 'ruble':
			return cash*dollarToRuble;
		case currency1 === 'dollar' && currency2 === 'euro':
			return cash*dollarToEuro;

		case currency1 === 'euro' && currency2 === 'ruble':
			return cash*eurotoRuble;
		case currency1 === 'euro' && currency2 === 'dollar':
			return cash*euroToDollar;

		case currency1 === 'ruble' && currency2 === 'dollar':
			return cash*rubleToDollar;
		case currency1 === 'ruble' && currency2 === 'euro':
			return cash*rubletoEuro;
		default:
			return null;
	} 
}

console.log(currencyTransfer(100, 'ruble', 'euro'));