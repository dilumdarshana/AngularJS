;(function() {

    /**
    *  Inject CONSTANTS service as a dependency and then use like this:
    */

    var app = angular.module('salesApp');

    app.constant('CONSTANTS', {
        'BASE_PATH': 'http://rest.site/api/v1'
    });
})();
