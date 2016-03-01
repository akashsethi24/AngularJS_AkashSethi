

angular.module("Assignment").factory("myFactory",function($http, $state){
    return {
        list: function (){
            return $http({
                method: 'POST',
                url:'http://localhost:9000/student/all'
            })
        },
        calling: function($location){
            $state.go('addStudent');
        }
    };
});