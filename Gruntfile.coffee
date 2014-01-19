module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-sass'

  grunt.initConfig
    dirs:
      base:     'static/'
      scss:     'static/scss/'
      dist:     'static/dist/'
      jst:      'static/templates/'

    sass:
      dist:
        options:
          require: [
            'bourbon'
            'neat'
          ]
          # requires sass 3.3.0
          # gem install sass --pre
          sourcemap: true
        files:
          '<%= dirs.dist %>app.css': '<%= dirs.scss %>main.scss'

    watch:
      scss:
        files: '<%= dirs.scss %>**/*.scss'
        tasks: 'sass'
