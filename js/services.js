PomodoroApp.factory('TaskService', function($rootScope) {
	var tasks = [],
		selectedTask = {};

	// generate some tasks for test purposes.
	for(i=0; i<10; i++){
		tasks.push({description: 'ablubla'+i, done: true});
	}
	selectedTask = tasks[0];

	return {
		getTasks: function(){
			return tasks;
		},

		addTask: function(task){
			tasks.push(task);
		},

		deleteTask: function(task){
			tasks.splice(tasks.indexOf(task), 1);
		},

		selectTask: function(task){
			selectedTask = task;
			$rootScope.$broadcast('selectedTaskChange');
		},

		getSelectedTask: function(){
			return selectedTask;
		}
	};
});