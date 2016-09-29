// Code goes here
(function() { // avoiding global scope
    var app = angular.module('myApp');

    var userController = function ($scope, github, $log, $routeParams) {

        var onComplete = function (data) {
            $scope.user = data;
            
            github.getRepos($scope.user)
                .then(onRepos, onError);
        };
        
        var onRepos = function(data) {
            $scope.repos = data;
        }

        var onError = function(err) {
            $scope.error = 'Could not connect to the remote URL';
        };
        
        $scope.sortOrder = 'stargazers_count';
        $scope.username = $routeParams.username;
        
        github.getUser($scope.username).then(onComplete, onError);

    };

    app.controller('userController', userController);
})();