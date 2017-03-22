KEYSModulo.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/detalhes', {
            templateUrl: 'detalhes.html'
        })
        .when('/elements', {
            templateUrl: 'elements.html'
        });
});
