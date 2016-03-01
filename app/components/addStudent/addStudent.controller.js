/**
 * Created by akash on 24/2/16.
 */
angular.module("Assignment").controller("add",function($scope,$location,$http,myaddFactory,$state){

        $scope.saveIt = function(){
            var data = {"id":parseInt($scope.id),"name":$scope.name,"email":$scope.email};
            alert("Here"+data.id);
            myaddFactory.calls(data).success(function(data){
                alert("Saved");
                $state.go('list');
            });

        }
});