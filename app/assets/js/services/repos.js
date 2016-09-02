app.factory('repos', ['$http', function($http) {
  return $http.get('https://api.github.com/search/repositories?q=bootstrap')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);