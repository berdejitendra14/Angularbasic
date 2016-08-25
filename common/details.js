/**
 * Created by user on 8/14/16.
 */
(function() {
    'use strict';
    angular
        .module('employeeDetails', [])
        .controller('EmployeeDetails', EmployeeDetails);

    EmployeeDetails.$inject = ['$http','$routeParams'];

    function EmployeeDetails($http, $routeParams) {
        var vm = this;
        vm.employ = 0;
        vm.emDetails = [];
        $http.get('/json/data.json').success(function(data) {
            vm.emDetails = data;
            vm.employ = $routeParams.itemId;
            console.log(vm.emDetails[vm.employ].reknown);
        });
    }

})();
