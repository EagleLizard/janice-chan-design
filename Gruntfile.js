// 30

var EXCLUDES = [
  'Janu.jpg',
  '**/tribes/*.jpg',
  '**/fatpig/*.jpg',
  '**/uvu/*.jpg',
  '**/sundance/*.jpg',
  '**/renaissancenow/*.jpg',
  '**/byu/*.jpg',
  '**/renaissancefaire/*.png',
  '**/agamemnon/*.jpg',
  '**/nextfall/*.jpg',
  'WebsiteLogo-min.png',
  'projects-home.png',
  'janu.jpg',
  'utahrenaissancefaire.png',
  'brighamyounguniversity.jpg',
  'sundancesummertheatre.jpg',
  'renaissancenow.jpg',
  'utahvalleyuniversity.jpg',
  'fatpig.jpg',
  'tribes.jpg',
  'agamemnon.jpg',
  'bigbird.jpg',
  'nextfall.jpg'
].map(s=>`!${s}`);

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
          src: ['**/*.{jpg,gif,png}', ...EXCLUDES],
          cwd: 'src/assets/',
          custom_dest: 'src/assets-resized/{%= name %}/{%= path %}',
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