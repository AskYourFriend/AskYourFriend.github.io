var a = true;

var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    //console.log('--App.run');
    var ref = new firebase("https://askyourfriend-6e257.firebaseio.com");
    $rootscope.data = {};
    $rootscope.data.members = [{}];
    var obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
    $rootScope.cnt = '/play/login.html';

    //setInterval(function () {
    //    a = !a;
    //    if (a) {
    //        $rootScope.cnt = '/play/play.html';
    //    } else {
    //        $rootScope.cnt = '/play/login.html';
    //    }
    //    $rootScope.$apply();
    //}, 2000);
    $rootScope.$watch('data', function (newValue, oldValue) {
        $rootScope.$apply();
    });
});

app.controller('LoginCtrl', function ($rootScope, $scope, $firebaseObject) {
    $scope.AddUser = function () {
        $rootScope.data.members.push({ nickname: $scope.nickname });
        $rootScope.cnt = '/play/play.html';
    }
});


app.controller('PlayCtrl', function ($rootScope, $scope, $firebaseObject) {
    $scope.DeleteGame = function () {
        $rootScope.data.members.lenght = 0;
        $rootScope.cnt = '/play/login.html';
    }
});
