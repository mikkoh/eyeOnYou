module.exports = function( grunt ) {

	grunt.initConfig({

		browserify: {

			standalone: {
				src: [ 'src/EyeOnYou.js' ],
				dest: 'bin/EyeOnYou.js',
				options: {

					standalone: 'eyeonyou'
				}
			},

			example: {
				src: [ 'example/main.js' ],
				dest: 'example/bundled.js'
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-browserify' );

	grunt.registerTask( 'example', [ 'browserify:example' ] )
	grunt.registerTask( 'default', [ 'browserify:standalone' ] );
};