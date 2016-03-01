/**
 * Created by akash on 24/2/16.
 */
angular.module("Assignment").controller("Events",function($scope,$location,$http,myFactory){
    myFactory.list().success(function(data){
        $scope.listOfItems = data;
        $scope.callAdd = function(){
            myFactory.calling($location)
        }
    });
});
