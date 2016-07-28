﻿var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    console.log('--App.run');
    var ref = new Firebase('https://askyourfriend-6e257.firebaseio.com');
    $rootScope.data = {};
    $rootScope.data.rooms = {};
    $rootScope.data.rooms.blue = {};
    $rootScope.data.rooms.blue.Members = [{}];
    var obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    
});

app.controller('BlueRoomCtrl', function ($scope, $rootScope, $firebaseObject) {
    $scope.hello = 'world';
    $rootScope.$watch('data', function (newValue, oldValue) {
        console.log('$rootScope.$watch');
        var str = '';
        for (var i = 0; i < newValue.rooms.blue.Members.length; i++) {
            str += newValue.rooms.blue.Members[i].nickname;
            str += '<br />';
        }
        $('#blue_members').html(str);
    });
    $scope.AddUser = function () {
        if ($scope.newnickname != '') {
            var IsUniNick = true;
            var last = -1;
            for (var i = 0; i < $rootScope.data.rooms.blue.Members.length; i++) {
                if ($rootScope.data.rooms.blue.Members[i].nickname == $scope.newnickname) {
                    IsUniNick = false;
                }
                last = i;
            }
            if (IsUniNick) {
                $rootScope.data.rooms.blue.Members.push({ nickname: $scope.newnickname });
                last++;
                $.cookie('CurrentUserIndex', last, { expires: 7, path: '/' });
                $('#myModal').modal('hide');
                $('#AddUserBtn').hide();
                $('#RmvUserBtn').show();
            }
        }
    }
    $scope.RemoveUser = function () {
        $rootScope.data.rooms.blue.Members.splice(parseInt($.cookie('CurrentUserIndex')), 1);
        $('#AddUserBtn').show();
        $('#RmvUserBtn').hide();
        $.cookie('CurrentUserIndex', null, { expires: 7, path: '/' });
    }
    $scope.ShowModal = function () {
        $('#myModal').modal('show');
    }
    
});

app.controller('MainCtrl', function ($scope, $rootScope, $firebaseObject) {
    $scope.hello = 'world';
    console.log($scope.hello);
});

