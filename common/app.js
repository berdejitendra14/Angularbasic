/**
 * Created by user on 8/13/16.
 */
(function(){
    'use strict';

    angular
        .module('myEmployee',[])
        .controller('MyFirstCtrl', MyFirstCtrl);

    MyFirstCtrl.$inject = ['$scope', '$http'];

    function MyFirstCtrl($scope, $http) {
        var vm = this;
        vm.hone = "Employee Search";
        vm.artistOrder = 'name';

        //call service and Assign your object to controller model
        $http.get('json/data.json').success(function(data){
            vm.employeeList = data;
            console.log($scope);
        });

        return vm;

        // Get length of you object
        // vm.employeeListLength = Object.keys(vm.employeeList).length;

    }


})();
