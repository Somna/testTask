/**
 * Created by Andrey on 04.09.2015.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        fest: {
            options: {
                template: function(data){

                    return grunt.template.process(
                        'define(function () { return <%= contents %> ; });',
                        {data: data}
                    )

                }
            },
            templatesRender: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/templates',
                        src: '*.xml',
                        dest: 'public_html/js/tmpl'
                    }
                ]
            }
        },
        compass: {
            compile: {
                options: {              // Target options
                    sassDir: 'src/sass',
                    cssDir: 'public_html/css',
                    environment: 'production'
                }
            }
        },
        watch: {
            fest: { /* Следим за изменениями шаблонов handlebars */
                files: ['src/templates/*.xml'],
                tasks: ['fest'], // перекомпиляция
                options: {
                    atBegin: true // на старте
                }
            },
            compass: {
                files: ['src/sass/**/*.sass'],
                tasks: ['compass'],
                options: {
                    atBegin: true
                }

            },
            serverReload: {
                files: ['public_html/**/*'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-fest');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);



};
