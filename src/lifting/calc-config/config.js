const config = {
	operatorMap: {
		'+': (numOb, value) => {
			return numOb.value + value;
		},
		'-': (numOb, value) => {
			return numOb.value -value;
		},
		'X': (numOb, value) => {
			return numOb.value * value;
		},
		'/': (numOb, value) => {
			return numOb.value / value;
		},
	}
}

export default config;