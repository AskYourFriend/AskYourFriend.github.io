var Button_AddUser = '<button ng-click="ShowModal()" class="btn btn-default">Add User</button>';
var Button_RemoveMe = '<button ng-click="RemoveUser()" class="btn btn-default">Remove me</button>';

var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    console.log('--App.run');
    var ref = new Firebase('https://askyourfriend-6e257.firebaseio.com');
    $rootScope.data = {};
    $rootScope.data.rooms = {};
    $rootScope.data.rooms.blue = {};
    $rootScope.data.rooms.blue.Members = [{}];
    var obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
    $rootScope.hello = 'bad';

    //obj.$loaded()
    //  .then(function () {
    //      setInterval(function () {
    //          var str = '';
    //          for (var i = 0; i < $rootScope.data.rooms.blue.Members.length; i++) {
    //              str += '';
    //              str += $rootScope.data.rooms.blue.Members[i].nickname;
    //              str += '<br />';
    //          }
    //          //$('#span1').html(str);
    //      }, 1000);
    //  })
    //  .catch(function (err) {
    //      console.error(err);
    //  });
    //obj.$watch(function () {
    //    var str = '';
    //    for (var i = 0; i < $rootScope.data.rooms.blue.Members.length; i++) {
    //        str += '';
    //        str += $rootScope.data.rooms.blue.Members[i].nickname;
    //        str += '<br />';
    //    }
    //    $('#span1').html(str);
    //});
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    
});

app.controller('BlueRoomCtrl', function ($scope, $rootScope, $firebaseObject) {
    $scope.hello = 'world';
    //$scope.IsAuth = false;
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
                $.cookie('index', last, { expires: 7, path: './' });
                $('#myModal').modal('hide');
                //$scope.IsAuth = true;
                $('#AddUserBtn').hide();
                $('#RmvUserBtn').show();
            }
        }
    }
    $scope.RemoveUser = function () {
        $rootScope.data.rooms.blue.Members.splice(parseInt($.cookie('index')), 1);
        $('#AddUserBtn').show();
        $('#RmvUserBtn').hide();
    }
    $scope.ShowModal = function () {
        $('#myModal').modal('show');
    }
});

app.controller('MainCtrl', function ($scope, $rootScope, $firebaseObject) {
    $scope.hello = 'world';
    console.log($scope.hello);
});