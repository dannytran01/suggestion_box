app.controller('HomeController', ['$scope', 'demoSuggestions', function($scope, demoSuggestions){

	$scope.suggestions = demoSuggestions.posts;

	$scope.upVote = function ($index) {
		$scope.suggestions[$index].upvotes += 1;
    };

	$scope.downVote = function ($index) {
		$scope.suggestions[$index].upvotes -= 1;
	};
}]);