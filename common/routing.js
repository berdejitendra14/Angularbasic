/**
 * Created by user on 8/14/16.
 */
(function(){
    'use strict';
    angular
        .module('myApp',[
            'ngRoute',
            'myEmployee',
            'employeeDetails'
        ])
        .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/employee', {
                controller: 'MyFirstCtrl',
                controllerAs: 'vm',
                templateUrl: 'components/employee.html'
            }).
            when('/details/:itemId', {
                controller: 'EmployeeDetails',
                ControllerAs: 'vm',
                templateUrl: 'components/details.html'
            }).
            otherwise({
                redirectTo: '/employee'
            });
        }]);

})();
