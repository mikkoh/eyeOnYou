var EyeOnYou = function() {

	this.tests = {};
	this.testsOrdered = [];

	//This shim is from MDN
	if( !Function.prototype.bind ) {
		Function.prototype.bind = function (oThis) {
			if (typeof this !== "function") {
				// closest thing possible to the ECMAScript 5 internal IsCallable function
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			}

			var aArgs = Array.prototype.slice.call(arguments, 1), 
			fToBind = this, 
			fNOP = function () {},
			fBound = function () {
				return fToBind.apply(this instanceof fNOP && oThis
				? this
				: oThis,
				aArgs.concat(Array.prototype.slice.call(arguments)));
			};

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
		};
	}
};

EyeOnYou.prototype.curTest = null;
EyeOnYou.prototype.secretSauce = null;
EyeOnYou.prototype.tests = null;
EyeOnYou.prototype.testsOrdered = null;
EyeOnYou.prototype.started = false;
EyeOnYou.prototype.onReady = null;

EyeOnYou.prototype.start = function() {

	this.started = true;

	if( this.secretSauce ) {

		console.log( this.secretSauce + 'EYE_ON_YOU' );
	}
};

EyeOnYou.prototype.addTest = function( testName, test ) {

	this.testsOrdered.push( testName );
	this.tests[ testName ] = test;
};

EyeOnYou.prototype.setup = function( secretSauce ) {

	this.secretSauce = secretSauce;

	if( this.started ) {

		console.log( this.secretSauce + 'EYE_ON_YOU' );
	}
};

EyeOnYou.prototype.getTestNames = function() {

	return this.testsOrdered;
};

EyeOnYou.prototype.runTest = function( name ) {

	this.curTest = name;
	this.tests[ name ]( this );
};

EyeOnYou.prototype.done = function() {

	console.log( this.secretSauce + this.curTest );
};

module.exports = window.$$eye = new EyeOnYou();