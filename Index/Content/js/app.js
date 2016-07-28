var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    console.log('--App.run');
    var ref = new Firebase("https://askyourfriend-6e257.firebaseio.com");
    $rootScope.data = {};
    var obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
    window.location = "http://new-website.com";
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    
});