/**
 * Created by akash on 24/2/16.
 */
angular.module("Assignment").factory("myaddFactory",function($http, $state){
    return {
        calls: function (datas){
            return $http({
                method: 'POST',
                url:'http://localhost:9000/student/save',
                data: JSON.stringify(datas),
                contentType: "application/json",
                dataType: "json"
            });
        }
    };
});