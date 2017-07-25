module.exports = function (grunt) {
    grunt.initConfig({
        // coffee: {
        //     scripts: {
        //             expand: true,
        //             flatten: true,
        //             cwd: 'coffee/',
        //             src: ['*.coffee'],
        //             dest: 'js/',
        //             ext: '.js'
        //     }
        // },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/dist/css',
                    src: ['styles.css', 'assets/dist/css/!*.min.css'],
                    dest: 'assets/dist/css',
                    ext: '.min.css'
                }]
            }
        },
        concat_css: {
            options: {},
            all: {
                src : [ 'assets/public/css/*.css'],
                dest : 'assets/dist/css/styles.css'
            }
        },
        watch:{
            options:{
                livereload: {
                    host: 'localhost',
                    port: 9009
                }
            },
            css: {
                files : 'assets/public/css/*.css',
                task : ['css']
            },
            scripts: {
                files : ['assets/public/js/*.js'],
                tasks : ['js']
            }
        },
        concat: {
            dist : {
                src: ['assets/public/js/*.js'],
                dest: 'assets/dist/js/scripts.js'
            }
        },
        uglify : {
            options: {
                expand: true,
                compress: {
                    global_defs: {
                        "DEBUG": false
                    },
                    dead_code: true
                }
            },
            dist : {
                files : {
                    'assets/dist/js/scripts.min.js' : [ 'assets/dist/js/scripts.js' ]
                }
            }
        }
    });


    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks( 'grunt-concat-css' );
    grunt.loadNpmTasks( 'grunt-newer' );

    // grunt.registerTask( 'start', [ 'css', 'js', 'watch' ]);
    grunt.registerTask( 'css', [  'newer:concat_css', 'cssmin' ] );
    grunt.registerTask( 'js', [ 'newer:concat', 'uglify' ] );
    grunt.registerTask( 'default', [ 'css', 'js',  'watch' ]);
};
