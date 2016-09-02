app.factory('openIssues', ['$http', function($http) {
  return $http.get('https://api.github.com/search/issues?q=repo:twbs/bootstrap')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);