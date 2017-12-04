module.exports = function(grunt) {
  grunt.initConfig({

    responsive_images: {
      resize: {
        options: {
          sizes: [
            // {
            //   name: 'sm',
            //   width: 320,
            // },
            {
              name: 'lg',
              height: 682,
              // width: 1024,
            }
          ],
          concurrency: 7
        },
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png}'],
          cwd: 'src/assets/',
          custom_dest: 'src/assets-resized/{%= name %}/{%= path %}'
        }]
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'src/assets-resized/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'src/assets-min/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['']);
  grunt.registerTask('images', ['responsive_images', 'imagemin']);
};