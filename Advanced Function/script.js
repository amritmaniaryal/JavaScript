//closures
/*
const first = () => {
	const greet = "Hi there!!";
	const second = () => {
		alert(greet);
	}
	return second;
}
const newfunc = first();
newfunc();
*/
//currying
const multiply = (a,b) => a*b;
const curryMultiply = (a) => (b) => a*b;
const multiplyByNineteen = curryMultiply(19);
//compose
const compose = (x,y) => (a) => x(y(a));
const sum = (num) =>num + 1;
compose(sum,sum)(7);