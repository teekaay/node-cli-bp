const pkg = require('./package');
const secrets = require('./secrets');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    // Package.json information
    pkg: pkg,

    // Credentials
    secrets: secrets,

    // Run tests
    ava: {
      test: ['lib/**/*.spec.js'],
      nycTest: {
        options: {
          verbose: true,
          nyc: true,
        },
        files: {
          src: ['<%= ava.test %>']
        }
      }
    },

    // Lint JS files
    eslint: {
      target: ['lib/**/*.js'],
      options: {
        configFile: '.eslintrc.js',
        reporter: 'stylish'
      }
    },

    // Remove generated files
    clean: {
      build: [
        'docs',
        '.nyc_output',
      ],
    },

    // Check NSP for known vulnerabilities
    nsp: {
      package: pkg,
      output: 'summary',
    },

    // watch files and do things
    watch: {
      spec: {
        files: ['lib/**/*.js'],
        tasks: [
          'test',
          'eslint',
        ],
        options: {
          spawn: false
        }
      }
    }
  });

  // Aliases
  grunt.registerTask('test', ['ava']);

  /**
   * ===================================
   * BUILD PIPELINE
   * ===================================
   */

  grunt.registerTask('prebuild', [
    'clean',
    'nsp',
  ]);

  grunt.registerTask('verify', [
    'test',
    'eslint',
  ]);

  grunt.registerTask('build', [

  ]);

  grunt.registerTask('postbuild', [

  ]);

  grunt.registerTask('deploy', [
    /** Insert deployment tasks here */
  ]);

  grunt.registerTask('default', [
    'prebuild',
    'verify',
    'build',
    'postbuild',
  ]);
};
