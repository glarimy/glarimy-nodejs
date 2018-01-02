console.clear();
let message = `Welcome to Nodejs (Version: ${process.version} running on V8 version ${process.versions.v8})!`;

process.stdin.on("data", function(name) {
	console.clear();
	console.log("Hi %s!\n%s\n", name.toString().trim(), message);
	process.stdin.pause();
});
console.log("Hi, Name please!");