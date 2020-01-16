/*
  *转换模块，导出成员：converToNumber
*/

define(function(require,exports,module){
  //公开一些转换逻辑
  exports.converToNumber = function(input){
    return parseFloat(input);
  }
})
