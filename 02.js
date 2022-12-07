async function getRemoteAValue() {
	return 10;
}

function sum(op1, op2) {
	return op1 + op2;
}

let a;

(async () => {
	a = await getRemoteAValue();
})();

let b = 10;

const result = sum(a, b); // очевидно выполнится до того, как переменная a будет инициализирована

console.log('sum =', result); // sum = NaN