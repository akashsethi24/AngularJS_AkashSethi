angular.module('Assignment').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('list');

    $stateProvider

        .state('list', {
            url: '/list',
            templateUrl: 'components/list/list.html',
            controller: 'Events'
        })
        .state('addStudent', {
            url: '/addStudent',
            templateUrl: 'components/addStudent/addStudent.html',
            controller: 'add'
        })
});