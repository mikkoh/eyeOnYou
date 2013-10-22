module.exports = function( grunt ) {

	grunt.initConfig({

		browserify: {

			standalone: {
				src: [ 'src/EyeOnYou.js' ],
				dest: 'bin/EyeOnYou.js',
				options: {

					standalone: 'eyeonyou'
				}
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-browserify' );

	grunt.registerTask( 'default', [ 'browserify:standalone' ] );
};