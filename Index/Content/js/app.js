//var tt = 123;
//var a = {};

var app = angular.module('App', ['firebase']);

app.run(function ($rootScope, $firebaseObject) {
    console.log('--App.run');
    var ref = new Firebase("https://voteua-d239d.firebaseio.com");
    //$rootScope.data = { votes: [{ answers: [{}] }] };
    $rootScope.data = {};
    var obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
    //$rootScope.$watch('data', function (newValue, oldValue) {
    //    $rootScope.$apply();
    //});
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {

    //$rootScope.data = { votes: [{ answers: [{}] }] };
    var currentvoteindex = 0;
    $scope.showVote = function(index) {
        var curr_vote = $rootScope.data.votes[index];
        $scope.name = curr_vote.name;
        $scope.desc = curr_vote.desc;
        $scope.answers = curr_vote.answers;
        currentvoteindex = index;
    }
    $scope.VoteClick = function (index) {
        $rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count + 1;
        $scope.answers = $rootScope.data.votes[currentvoteindex].answers;
        //$scope.$apply();
    }
});