var tt = 123;
var a = {};
var ref = new Firebase("https://askyourfriend-6e257.firebaseio.com");
var obj = $firebaseObject(ref);

var app = angular.module('App', ['firebase']);

//app.controller('MainCtrl', ["$scope", "$firebaseObject", function ($scope, $firebaseObject) {
//    var ref = new Firebase("https://askyourfriend-6e257.firebaseio.com");

//    ref.on("value", function (snapshot) {
//        $('#span1').text(snapshot.val().name);
//    }, function (errorObject) {
//        console.log("The read failed: " + errorObject.code);
//    });

//    //var fireObject = $firebaseArray(ref);
//    //console.log(fireObject);
//    //$scope.hello1 = "a";

//    //var obj = $firebaseObject(ref);

//    //var database;

//    //obj.$bindTo(database, "data");

//    //console.log(database);

//    //fireObject.$bindTo($scope, "data");

//    //ref.on('value', function (snapshot) {
//    //    $scope.hello = snapshot.val().name;
//    //}, function (errorObject) {
//    //    console.log('The read failed: ' + errorObject.code);
//    //});
//}]);

app.run(function ($rootScope) {
    
});


app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    var ref = new Firebase("https://askyourfriend-6e257.firebaseio.com");
    var obj = $firebaseObject(ref);

    console.log(tt);
    tt = 43;
    console.log(tt);
    console.log($rootScope);
    obj.$bindTo($rootScope, 'data').then(function () {
        a = $rootScope.data;
        console.log(a); // { foo: "bar" }
        //ref.set({ foo: "baz" });  // this would update the database and $scope.data
    });


    a.foo = "baz";  // will be saved to the database
    console.log(a.foo);

    //ref.on("value", function (snapshot) {
    //    $('#span1').text(snapshot.val().name);
    //    console.log(snapshot.val().name);
    //}, function (errorObject) {
    //    console.log("The read failed: " + errorObject.code);
    //});
});