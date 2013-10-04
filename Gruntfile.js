module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
          dist: {
            options: {
              cssDir: 'stylesheets',
              sassDir: 'stylesheets/sass/style.scss',
              imagesDir: 'images',
              javascriptsDir: 'scripts',
              force: true
            }
          }
        },
        cssmin: {
          minify: {
            expand: true,
            cwd: 'stylesheets',
            src: ['*.css', '!*.min.css'],
            dest: 'stylesheets',
            ext: '.min.css'
          }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['compass']
            },
            css: {
                files: 'stylesheets/*.css',
                tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['index.html','**/*.css'],
                options: {
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch','grunt-contrib-compass','grunt-contrib-cssmin','grunt-contrib-livereload');
    grunt.registerTask('default',['compass','watch','cssmin']);
}