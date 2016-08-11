//var tt = 123;
//var a = {};

var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    console.log('--App.run');
    var ref = new Firebase("https://askyourfriend-6e257.firebaseio.com");
    $rootScope.data = {};
    var obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
    obj.$loaded,
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    //$rootScope.data.$watch();
});