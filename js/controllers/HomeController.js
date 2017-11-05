app.controller('HomeController', ['$scope', 'demoSuggestions', function($scope, demoSuggestions){

	$scope.suggestions = demoSuggestions.posts;

}]);