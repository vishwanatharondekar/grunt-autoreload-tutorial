module.exports = function(grunt) {

	grunt.initConfig({
		watch:{
			options: {
				livereload: true
			},
			files:['**/*.js','**/*.html', '**/*.css']
		},
		connect : {
			options : {
				hostname : 'localhost',
				port : 9000,
				livereload : 35729
			},
			myserver: {}
		}
	});
	

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	// Default task(s).
	grunt.registerTask('default',function(){
		grunt.task.run(['server']);
	});
	
	grunt.registerTask('server', [ 'connect', 'watch']);
	
};
