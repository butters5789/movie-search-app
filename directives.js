var app = angular.module('myApp');

app.directive('movieForm', function() {
    return {
        restrict: "E",
        templateUrl: 'templates/form.html'
    };
});

app.directive('singleMovie', function() {
    return {
        restrict: "E",
        templateUrl: 'templates/singleMovie.html'
    };
});
