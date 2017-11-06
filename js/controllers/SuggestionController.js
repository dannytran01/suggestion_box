app.controller('SuggestionController', ['$scope', 'demoSuggestions', '$location', '$routeParams', function($scope, demoSuggestions, $location, $routeParams){

    $scope.addNewSuggestion = function(){
        var newSuggestion = {title:$scope.newSuggestion, upvotes:0, comments:[]};
        var pos = demoSuggestions.posts.push(newSuggestion);
        $location.hash(pos - 1);
        $location.path('/suggestions' + pos);
    };

}]);