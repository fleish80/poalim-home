angular.module("poalim-home").controller("ProjectDetailsCtrl", ['$scope', '$stateParams', '$meteor',
  function ($scope, $stateParams, $meteor) {
      $scope.projectId = $stateParams.projectId;
  }]);