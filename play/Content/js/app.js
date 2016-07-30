var a = true;

var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    //console.log('--App.run');
    //var ref = new Firebase("https://askyourfriend-6e257.firebaseio.com");
    //$rootScope.data = {};
    //var obj = $firebaseObject(ref);
    //obj.$bindTo($rootScope, 'data');
    $rootScope.cnt = '/play/play.html';

    setInterval(function () {
        a = !a;
        if (a) {
            $rootScope.cnt = '/play/play.html';
        } else {
            $rootScope.cnt = '/play/login.html';
        }
        $rootScope.$apply();
    }, 2000);
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    
});