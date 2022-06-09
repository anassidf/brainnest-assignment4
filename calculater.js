const resultInput = document.getElementById('result');

const addToInput = (value) => {
	resultInput.value += value;
};

const clearResult = () => {
	resultInput.value = '';
};

/* calculate logic */

const add = (num1, num2) => {
	return num1 + num2;
};
const subtract = (num1, num2) => {
	return num1 - num2;
};
const multiply = (num1, num2) => {
	return num1 * num2;
};
const divide = (num1, num2) => {
	return num1 / num2;
};

const operate = () => {
	let num1 = resultInput.value.charAt(0);
	let num2 = resultInput.value.charAt(2);
	let operator = resultInput.value.charAt(1);
	if (resultInput.value.length == 3) {
		switch (operator) {
			case '+':
				resultInput.value = add(Number(num1), Number(num2));
				break;
			case '-':
				resultInput.value = subtract(Number(num1), Number(num2));
				break;
			case '*':
				resultInput.value = multiply(Number(num1), Number(num2));
				break;
			case '/':
				resultInput.value = divide(Number(num1), Number(num2));
				break;
			default:
				resultInput.value = 'sorry You have entered an invalid operator';
				resultInput.style.color = 'red';
		}
	} else {
		resultInput.value = eval(resultInput.value);
	}
};
