const EventEmitter = require('events');

class CalcEmitter extends EventEmitter {};

const calc = new CalcEmitter();

calc.on('add', (f, s) => {
	let sum = f + s;
	let message = `${f} + ${s} = ${sum}`;
	calc.emit("show", message);
});

calc.on("show", (str) => {
	console.log(str);
});

console.clear();
console.log("Welcome to Node calculator");

process.stdin.on("data", function(command) {
	let options = command.toString().trim().split(" ");
	switch(options[0]){
			case "add":
				calc.emit("add", parseInt(options[1]), parseInt(options[2]));
				console.log("Usage: add <first> <second>");
				console.log("Usage: exit");
				break;
			case "exit":
				process.stdin.pause();
				console.log("Thanks!");
				break;
			default: 
				console.log("NOP!");
				console.log("Usage: add <first> <second>");
				console.log("Usage: exit");
	}
});
console.log("Usage: add <first> <second>");
console.log("Usage: exit");