//定义一个模块，遵循Seajs的写法
define(function(require,exports,module){
  //此处是模块的私有空间
  //定义模块私有成功

  //载入convert模块
  // var convertor = require('./convert.js');
  //
  // function add(a,b){
  //   return convertor.converToNumber(a) + convertor.converToNumber(b);
  // }
  // function subtract(a,b){
  //   return convertor.converToNumber(a) - convertor.converToNumber(b);
  // }
  // function multiply(a,b){
  //   return convertor.converToNumber(a) * convertor.converToNumber(b);
  // }
  // function divide(a,b){
  //   return convertor.converToNumber(a) / convertor.converToNumber(b);
  // }

  //暴露模块的公共成员
  // exports.add = add;
  // exports.subtract = subtract;
  // exports.multiply = multiply;
  // exports.divide = divide;

  // console.log(module.exports === exports); 输出true

  function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  Person.prototype.sayHi = function(){
    console.log('hi! i' + this.name);
  };
  //
  // exports.Person = Person; 暴露可控制
  //最终导处的以module.exports为准
  // module.exports = {"name":"world"}; 暴露整体
  //此时module.exports指向的是一个新的地址
  // exports.name = 'hello';
  //exports是module.exports的快捷方式，指向的仍然是原本的地址


  //return 方式不太常用,但优先级最高
  return {name:'world2'};


})
