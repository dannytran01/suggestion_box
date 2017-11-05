app.controller('CommentController', ['$scope', 'demoSuggestions', '$routeParams',
    function($scope, demoSuggestions, $routeParams){
        $scope.suggestion = demoSuggestions.posts[$routeParams.id];

        $scope.addComment = function(){
            demoSuggestions.posts[$routeParams.id].comments.push($scope.commentText);
            $scope.suggestion = demoSuggestions.posts[$routeParams.id];
        };
}]);