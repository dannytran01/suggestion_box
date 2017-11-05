app.controller('CommentController', ['$scope', 'demoSuggestions', '$routeParams',
    function($scope, demoSuggestions, $routeParams){
        $scope.suggestion = demoSuggestions.posts[$routeParams.id];
}]);