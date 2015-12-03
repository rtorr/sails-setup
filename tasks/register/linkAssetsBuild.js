module.exports = function(grunt){
  grunt.registerTask('linkAssetsBuild', [
    'sails-linker:devStylesRelative',
    'sails-linker:devTpl',
    'sails-linker:devJsRelativeJade',
    'sails-linker:devStylesRelativeJade',
    'sails-linker:devTplJade'
  ]);
};
