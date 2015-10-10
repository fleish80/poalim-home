angular.module("poalim-home").controller("ProjectListCtrl", ['$scope', '$meteor','$filter',
  function ($scope, $meteor,$filter) {
      var transFilter = $filter('trans');
      $scope.party = {
          _id: 0,
          name: transFilter('projectTypes.luxuryProject')
      };
  }]);