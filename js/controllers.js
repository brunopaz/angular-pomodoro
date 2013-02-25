/**
 * Pomodoro app controllers. */
PomodoroApp.controller('TaskController', 
	function TaskController($scope, TaskService){

	$scope.tasks = TaskService.getTasks();
	$scope.deleteTask = TaskService.deleteTask;
	$scope.selectTask = TaskService.selectTask;

	$scope.addTask = function(){
		var task = {description: $scope.taskDescription, done: false};
		TaskService.addTask(task);
		$scope.taskDescription = '';
	}
});

PomodoroApp.controller('PomodoroController',
	function PomodoroController($scope, TaskService){

	$scope.selectedTask = TaskService.getSelectedTask();
	
	$scope.$on('selectedTaskChange', function(){		
		$scope.selectedTask = TaskService.getSelectedTask();
	});
});

