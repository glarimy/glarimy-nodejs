const EventEmitter = require('events');

class CalcEmitter extends EventEmitter {

};

const Calculator = new CalcEmitter();

Calculator.on('add', (f, s) => {
	let sum = f + s;
	let message = `${f} + ${s} = ${sum}`;
	Calculator.emit("show", message);
});

Calculator.on("show", (str) => {
	console.log(str);
});

module.exports = Calculator;