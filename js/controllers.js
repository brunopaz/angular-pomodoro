function TaskController($scope){
	$scope.tasks = [];

	$scope.addTask = function(){
		$scope.tasks.push({
			description: $scope.taskDescription,
			done: false
		});
		$scope.taskDescription = "";
	}
}

function TimerController($scope){	
	var intervalId = null,
		clock = {minutes: 0,seconds: 0};	

	$scope.inPause = false;

	$scope.play = function(){
		intervalId = setInterval(function(){
			tick();
		}, 10)
	};

	$scope.stop = function(){
		if(!isNaN(intervalId)){
			clearInterval(intervalId);
		}
	};

	$scope.clock = function(){
		if(clock.seconds == 60){
			clock.seconds = 0;
			clock.minutes++;
		}
		if(clock.minutes == 25 || clock.minutes == 5){
			pomodoro();
		}
		return ((clock.minutes < 10) ? '0' + clock.minutes : clock.minutes) +':'+ ((clock.seconds < 10) ? '0' + clock.seconds : clock.seconds);
	};

	var pomodoro = function(){
		if($scope.inPause && clock.minutes == 5){
			clock.minutes = 0;
			clock.seconds = 0;
			$scope.inPause = false;
		}
		if(!$scope.inPause && clock.minutes == 25){
			clock.minutes = 0;
			clock.seconds = 0;
			$scope.inPause = true;
		}
	};
	
	var tick = function(){
		clock.seconds++;
		$scope.$apply();
	};
}