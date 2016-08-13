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
    var currentvoteindex = 0;
    $scope.showVote = function (index) {
        $rootScope.selectedanyvote = true;
        var curr_vote = $rootScope.data.votes[index];
        $scope.name = curr_vote.name;
        $scope.desc = curr_vote.desc;
        $scope.nick = curr_vote.nick;
        $scope.answers = curr_vote.answers;
        currentvoteindex = index;
        $('[data-vote-select]').removeClass('active');
        var s = '';
        s += '[data-vote-select=';
        s += index;
        s += ']';
        $(s).addClass('active');

        var str = currentvoteindex.toString();
        if ($.cookie(str) != null && $.cookie(str) != 'null') {
            $scope.activeAnsw = parseInt($.cookie(str));
        }
        else {
            $scope.activeAnsw = null;
        }

        //var str = currentvoteindex.toString();
        //$('[data-vote-answer]').removeClass('active');
        //if ($.cookie(str) != null && $.cookie(str) != 'null') {
        //    var s2 = '';
        //    s2 += '[data-vote-answer=';
        //    s2 += $.cookie(str);
        //    s2 += ']';
        //    $(s2).addClass('active');
        //    console.log($(s2));
        //    //$(s2).each(function (index) { $(this).addClass('active'); });
        //    s2 = null;
        //}
    }
    $scope.VoteClick = function (index) {
        var str = currentvoteindex.toString();
        if ($.cookie(str) == null || $.cookie(str) == 'null') {
            $rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count + 1;
            $.cookie(str, index.toString(), {/*expires: 366, */path: '/'});
            //$scope.answers = $rootScope.data.votes[currentvoteindex].answers;
            $scope.activeAnsw = index;
        }
        else if (parseInt($.cookie(str)) != index) {
            $rootScope.data.votes[currentvoteindex].answers[parseInt($.cookie(str))].count = $rootScope.data.votes[currentvoteindex].answers[parseInt($.cookie(str))].count - 1;
            $rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count + 1;
            $.cookie(str, index.toString(), {/*expires: 366, */path: '/' });
            $scope.activeAnsw = index;
        }
        else if (parseInt($.cookie(str)) == index) {
            $rootScope.data.votes[currentvoteindex].answers[index].count = $rootScope.data.votes[currentvoteindex].answers[index].count - 1;
            $.cookie(str, null);
            $scope.activeAnsw = null;
        }
        //$scope.$apply();
    }
});