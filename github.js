(function() {
    
    // declaring a custome service
    var github = function($http) {
        
        var getUser = function(username) {
            return $http.get('https://api.github.com/users/' + username)
                        .then(function(response) {
                            return response.data;
                        });        
        };
        
        var getRepos = function(user) {
            return $http.get(user.repos_url)
                        .then(function(response) {
                            return response.data;
                        });
        };
        
        return {
            'getUser': getUser,
            'getRepos': getRepos 
        };
    };
    
    // referencing from existing module
    // no square brackets. since, we do not declare a module, just use the reference
    var myApp = angular.module('myApp');
    
    // register service for outside
    myApp.factory('github', github);
})();