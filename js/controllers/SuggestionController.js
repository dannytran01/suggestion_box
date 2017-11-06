app.controller('SuggestionController', ['$scope', 'demoSuggestions', '$location', '$routeParams', function($scope, demoSuggestions, $location, $routeParams){

    $scope.addNewSuggestion = function(){
        var newSuggestion = {title:$scope.newSuggestion, upvotes:0, comments:[]};
        demoSuggestions.posts.push(newSuggestion);
        $location.path('/suggestions');
    };

}]);