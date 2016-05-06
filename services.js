var app = angular.module('myApp');

app.service('_imdb', ['$http', function($http) {
    return {
        findMovie: function(movie) {
            var movieTitle = movie.toLowerCase().split(' ').join('+');
            return $http.get('https://www.omdbapi.com/?s=' + movieTitle + '&r=json');
        },
        grabMovie: function(imdbID) {
            return $http.get('https://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json');
        }
    }
}]);
