// Most basic module pattern possible
// Problem with this, it is accessible in the global namespace (Cluttering)
// function foo() {
// 	console.log('foobar');
// }


// Solution 

// !function (underscore){
// 	underscore.someawsomemethod = "Yah!!"
// 	console.log(underscore.VERSION);
// }(_);

// What happens if you want to keep your code form cluttering the global namespace= and share your code with different parts of your application?

// Module export pattern!


// Assigning the entire mod to a variable.
var awesomeNewModule = (function(exports){
	// Create a local object. serves a container
	var exports = {
		foo: 5, 
		bar: 10 
	};

	// assigning a method to export  
	exports.helloMars = function() {
		console.log("Hello Mars")
	};

	exports.goodbye = function () {
		console.log("Goodbye");
	};

	return exports

}(awesomeNewModule || {}));
// if exists import otherwise its simply an object





