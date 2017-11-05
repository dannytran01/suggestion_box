var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/suggestions', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/add_suggestion', {
            controller: 'SuggestionController',
            templateUrl: 'views/add_suggestion.html'
        })
        .when('/suggestions/:suggestion-id/comment', {
            controller: 'CommentController',
            templateUrl: 'views/comment.html'
        })
        .otherwise({
            redirectTo: '/suggestions'
        })

});
