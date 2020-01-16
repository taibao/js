'use strict'
/**
在seajs中引入jquery时，需要在jquery文件底部9176行加上一段代码，适配cmd
方式
//适配cmd引入方式
if(typeof define === "function" && !define.amd){
	//当前有define函数，并且不是AMD
	//jquery在新版本中如果使用amd或cmd方式，不会往全局挂在jquery对象
	define(function(){
		return jQuery.noConflict(true);
	});
}
*/

// function getQueryString(name) {
// 		var reg = new RegExp("(^|&)" + page + "=([^&]*)(&|$)", "i");
// 		var r = window.location.search.substr(1).match(reg);
// 		if (r != null) return unescape(r[2]);
// 		return null;
// }

define(function(require,exports,module){
  //用jq怎么做
  // var $ = require('./jquery.js');
  // $(document.body).css('backgroundColor','red');

	var Pagination = require('./modules/pagination.js');
	var pager = new Pagination(1,20,7);
	pager.render('.pagination');
})
