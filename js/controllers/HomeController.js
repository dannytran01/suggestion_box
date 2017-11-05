app.controller('HomeController', ['$scope', 'demoSuggestions', function($scope, demoSuggestions){

	$scope.suggestions = demoSuggestions.posts;

	$scope.upVote = function (item) {
		var i = demoSuggestions.posts.indexOf(item);
        demoSuggestions.posts[i].upvotes += 1;
        $scope.suggestions = demoSuggestions.posts;
    };

	$scope.downVote = function (item) {
        var i = demoSuggestions.posts.indexOf(item);
        demoSuggestions.posts[i].upvotes -= 1;
        $scope.suggestions = demoSuggestions.posts;
	};
}]);