module.exports = function(grunt){
  grunt.registerTask('linkAssetsBuildProd', [
    'sails-linker:prodStylesRelative',
    'sails-linker:devTpl',
    'sails-linker:prodJsRelativeJade',
    'sails-linker:prodStylesRelativeJade',
    'sails-linker:devTplJade'
  ]);
};
