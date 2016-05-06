var app = angular.module('myApp');

app.controller('AppController', ['$scope', '$location', '_imdb', function($scope, $location, _imdb) {
    $scope.view = {};
    $scope.view.findMovie = function(movie) {
        $location.path('/');
        _imdb.findMovie(movie).then(function(res) {
            $scope.view.omdbData = res.data.Search;
        });
    };
    $scope.view.grabMovie = function(imdbID) {
        $scope.view.singleMovie = {};
        _imdb.grabMovie(imdbID).then(function(res) {
            $scope.view.singleMovie = res.data;
        });
    };
}]);
