var app = angular.module('App', ['ngRoute']);

app.controller("MainCtrl", function ($scope) {
    $scope.hello = "world";
});