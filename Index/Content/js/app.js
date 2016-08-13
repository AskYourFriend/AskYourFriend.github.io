var app = angular.module('App', ['firebase']);
var obj;

app.run(function ($rootScope, $firebaseObject) {
    console.log('--App.run');
    var ref = new Firebase("https://voteua-d239d.firebaseio.com");
    //$rootScope.data = { votes: [{ answers: [{}] }] };
    $rootScope.data = {};
    obj = $firebaseObject(ref);
    obj.$bindTo($rootScope, 'data');
    $rootScope.selectedanyvote = false;
    //$rootScope.$watch('data', function (newValue, oldValue) {
    //    $rootScope.$apply();
    //});
    obj.$loaded(function () {

    });
});

app.controller('MainCtrl', function ($rootScope, $scope, $firebaseObject) {
    //$rootScope.data = { votes: [{ answers: [{}] }] };
    //obj.$loaded(function () {
    //    if ($rootScope.data.votes.length >= 1) {
    //        $scope.showVote(0);
    //    }
    //});
    $scope.currentvoteindex = null;
    $scope.showVote = function (index) {
        $rootScope.selectedanyvote = true;
        var curr_vote = $rootScope.data.votes[index];
        $scope.name = curr_vote.name;
        $scope.desc = curr_vote.desc;
        $scope.nick = curr_vote.nick;
        $scope.answers = curr_vote.answers;
        $scope.currentvoteindex = index;
        //$('[data-vote-select]').removeClass('active');
        //console.log('remove class');

        //var s = '';
        //s += '[data-vote-select=';
        //s += index;
        //s += ']';
        //$(s).addClass('active');

        var str = $scope.currentvoteindex.toString();
        if ($.cookie(str) != null && $.cookie(str) != 'null') {
            $scope.activeAnsw = parseInt($.cookie(str));
        }
        else {
            $scope.activeAnsw = null;
        }
    }
    $scope.VoteClick = function (index) {
        var str = $scope.currentvoteindex.toString();
        if ($.cookie(str) == null || $.cookie(str) == 'null') {
            //$rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count + 1;
            $rootScope.data.votes[$scope.currentvoteindex].answers[index].count++;
            $.cookie(str, index.toString(), {/*expires: 366, */path: '/'});
            $scope.activeAnsw = index;
        }
        else if (parseInt($.cookie(str)) != index) {
            //$rootScope.data.votes[currentvoteindex].answers[parseInt($.cookie(str))].count = $rootScope.data.votes[currentvoteindex].answers[parseInt($.cookie(str))].count - 1;
            //$rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count + 1;
            $rootScope.data.votes[$scope.currentvoteindex].answers[parseInt($.cookie(str))].count--;
            $rootScope.data.votes[$scope.currentvoteindex].answers[index].count++;
            $.cookie(str, index.toString(), {/*expires: 366, */path: '/' });
            $scope.activeAnsw = index;
        }
        else if (parseInt($.cookie(str)) == index) {
            //$rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count - 1;
            $rootScope.data.votes[$scope.currentvoteindex].answers[index].count--;
            $.cookie(str, null);
            $scope.activeAnsw = null;
        }
        //$scope.$apply();
    }
});