var app = angular.module('app', []);
        
        app.controller('ctrl', ["$scope", "$http", function ($scope, $http) {
          $http.get("search.json").then(function (response) {
            $scope.results = [];
            $scope.images = response.data;
            angular.forEach($scope.images, function (value, key) {
              $scope.results.push({ Name: key, Image: value });
            });
          });
          
          $scope.deleting = function () {
              $scope.search = null;
          }
        }]);
