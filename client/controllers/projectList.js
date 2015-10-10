angular.module("poalim-home").controller("ProjectListCtrl", ['$scope','$filter', '$meteor',
  function ($scope,$filter, $meteor) {
      var transFilter = $filter('trans');
      $scope.party = {
          _id: 0,
          name: "פרויקט יוקרה"
      };
  }]);