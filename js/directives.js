PomodoroApp.directive('pomodorotimer', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/pomodoro-timer.html',
		controller: function($rootScope, $scope){
			var intervalId = null,
				clock = [0,0];	

			$scope.paused = true;
			$scope.breaktime = false;

			$scope.play = function(){
				if($scope.paused){
					$scope.paused = false;
					intervalId = setInterval(function(){
						tick();
					}, 10)
				}else{
					$scope.paused = true;
					clearInterval(intervalId);
				}				
			};

			$scope.stop = function(){
				if(!isNaN(intervalId)){
					clearInterval(intervalId);
					clock = [0,0];
					$scope.paused = true;
				}
			};

			$scope.clock = function(){
				if(clock[1] == 60){
					clock[1] = 0;
					clock[0]++;
				}
				if(clock[0] == 25 || clock[0] == 5){
					pomodoro();
				}
				
				return clock.map(function(e){
					return e < 10  ? '0' + e : e;
				}).join(':');
			};

			var pomodoro = function(){
				if($scope.breaktime && clock[0] == 5){
					clock[0] = 0;
					clock[1] = 0;
					$scope.breaktime = false;
					return;
				}
				if(!$scope.breaktime && clock[0] == 25){
					clock[0] = 0;
					clock[1] = 0;
					$scope.breaktime = true;
				}
			};

			var tick = function(){
				clock[1]++;
				$scope.$apply();
			};
		}
	}
});