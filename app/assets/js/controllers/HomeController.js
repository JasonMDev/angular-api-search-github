app.controller('HomeController', ['$scope', 'photos', 'repos','openIssues', function($scope, photos, repos, openIssues) {
  photos.success(function(data) {
    $scope.photos = data;
  });
  repos.success(function(data) {
    $scope.repos = data;
  });
  openIssues.success(function(data) {
    $scope.openIssues = data;
  });
}]);