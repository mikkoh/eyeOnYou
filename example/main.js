var eyeOnYou = require( '../src/eyeOnYou' );



var elem = document.getElementById( 'test' );

elem.style.width = '500px';
elem.style.height = '500px';
elem.style.background = '#F0F';




window.onresize = function() {

	elem.style.width = window.innerWidth + 'px';
	elem.style.height = window.innerHeight + 'px';

	elem.innerHTML = window.innerWidth + 'x' + window.innerHeight;

	console.log( window.innerWidth, window.innerHeight );

	console.log( elem.__proto__ );
};






eyeOnYou.addTest( 'red', function( eyeOnYou ) {

	elem.style.background = '#F00';

	eyeOnYou.done();
});

eyeOnYou.addTest( 'blue', function( eyeOnYou ) {

	elem.style.background = '#00F';

	eyeOnYou.done();
});

eyeOnYou.addTest( 'green', function( eyeOnYou ) {

	elem.style.background = '#0F0';

	eyeOnYou.done();
});

eyeOnYou.start();