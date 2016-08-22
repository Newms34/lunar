var mobCon = app.controller('mob-con',function($scope){
	$scope.rotLowerLim=20;//how much the phone must be twisted before the craft moves. Prevents over-sensitivity!
	$scope.currX = 0;
	$scope.currY = 0;
	$scope.currZ = 0;
})