angular.module("moBilling.controllers.claimEditDetails", [])

    .controller("ClaimEditDetailsController", function ($scope) {
        $scope.add = function (attributes) {
            $scope.claim.daily_details.push(angular.extend({ autogenerated: false }, attributes));
        };

        $scope.remove = function (detail) {
            var index = $scope.claim.daily_details.indexOf(detail);

            $scope.claim.daily_details.splice(index, 1);
        };

        $scope.isTimeVisible = function(){
        	var isComprehensiveCodeExist = false;
        	angular.forEach($scope.claim.daily_details, function(item, key){
        		if(item.code == "C130" || item.code == "A130"){
        			isComprehensiveCodeExist = true;
        		}
        	});

        	return isComprehensiveCodeExist;
        };

        $scope.$watch($scope.isTimeVisible, function (isTimeVisible) {

        	console.log(isTimeVisible);
            if (!isTimeVisible) {
                $scope.claim.consult_time_in = undefined;
                $scope.claim.consult_time_out = undefined;
            }
        });

    });
