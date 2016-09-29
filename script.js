// Code goes here
(function() {
    var app = angular.module('myApp', []);

    var mainController = function ($scope, github, $log, $anchorScroll, $location) {

        var onComplete = function (data) {
            $scope.user = data;
            
            github.getRepos($scope.user)
                .then(onRepos, onError);
        };
        
        var onRepos = function(data) {
            $scope.repos = data;
            
            $location.hash('userDetails');
            $anchorScroll();
        }

        var onError = function(err) {
            $scope.error = 'Could not connect to the remote URL';
        };
        
        $scope.username = 'dilumdarshana';
        $scope.sortOrder = 'stargazers_count';
        
        $scope.search = function(username) {
            // use then function to get the callback.
            github.getUser(username)
                .then(onComplete, onError);
        };
    };

    app.controller('mainController', mainController);

})();