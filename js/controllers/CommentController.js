app.controller('CommentController', ['$scope', 'demoSuggestions', '$routeParams',
    function($scope, demoSuggestions, $routeParams){
        $scope.suggestion = demoSuggestions.posts[$routeParams.id];

        $scope.addComment = function(){
            console.log("Attempting to get: " + $scope.commentText);
            $scope.suggestion.comments.push($scope.commentText);
        };
}]);