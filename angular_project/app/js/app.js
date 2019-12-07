(function (angular) {
	'use strict';
	// Your starting point. Enjoy the ride!
	/**
	*主模块
	*/
	var myApp  = angular.module('MyTodoMvc',[]);
	//注册一个主要的控制器
	myApp.controller('MainController',['$scope',function($scope){
		//文本框需要一个模型
		$scope.text = '';
		$scope.i = '3';
		//任务列表也需要一个
		//每一个任务的结构{id:1,text:'学习',completed:''}
		$scope.todos = [
			{id:1,text:'学习',completed:false},
			{id:2,text:'睡觉',completed:false},
			{id:3,text:'打豆豆',completed:true}
		];

		//添加todo
		$scope.add = function(){
				if(!$scope.text){
					return;
				}
				$scope.todos.push({
					  //自动增长
						id:$scope.i++,
						// $scope.text是双向数据绑定
						text:$scope.text,
						completed:false
					});
					//清空文本框
					$scope.text="";
		};
		//处理删除
		$scope.remove = function(id){
			for(var i=0;i<$scope.todos.length;i++)
			{
				if($scope.todos[i].id===id)
				{
					$scope.todos.splice(i,1); //从数组中删除并返回一个元素
					break;
				}
			}
		};
		//清空已完成
		$scope.clear = function(){
			var result = [];
			for(var i=0;i<$scope.todos.length;i++)
			{
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		};

		//是否有已经完成的
		$scope.existCompleted = function(){
			//该函数一定要有返回值
			for(var i=0;i<$scope.todos.length;i++)
			{
				if($scope.todos[i].completed){
					return true;
				}
			}
			return false;
		};

		//当前编辑哪个元素
		$scope.currentEditingId = -1;
		$scope.editing = function(id){
			$scope.currentEditingId = id; //给双击的项添加id
		};
		$scope.save = function(){
			$scope.currentEditingId = -1; //给双击的项添加id
		};

		// $scope.checkall=false;

		var now = true;
		$scope.toggleAll = function(){
			for(var i=0;i<$scope.todos.length;i++)
			{
				$scope.todos[i].completed = now;
			}
			now = !now;
		}


	}]);

})(angular);
