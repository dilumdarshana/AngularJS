// Code goes here
(function() { // avoiding global scope
    var app = angular.module('myApp');

    var mainController = function($scope, $location) {

        $scope.username = 'dilumdarshana';

        $scope.search = function(username) {

            $location.path("/user/" + username);
        };
    };

    app.controller('mainController', mainController);
})();
