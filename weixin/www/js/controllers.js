angular.module('starter.controllers', [])

.controller('IntroCtrl',['$scope','$state','$timeout', function($scope,$state,$timeout) {
  $scope.firstCome = function () {
     localStorage.isFirst = false;
     $state.go('tab.dash');
  };

  if(localStorage.isFirst)
  {
    $state.go('tab.dash');
  }
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

    $scope.$on('$ionicView.loaded', function() {
  ionic.Platform.ready( function() {
    // if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
    $timeout(function () {
      if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
    },3000);
  });
  });
}])


.controller('DashCtrl', function($rootScope, $timeout, $interval, $scope, $http) {
    var vm = $scope.vm = {
    moredata: false,
    messages: [],
    // pagination: {
    //   perPage: 5,
    //   currentPage: 1
    // },
    init: function () {
      // services.getMessages({perPage: vm.pagination.perPage, page: vm.pagination.currentPage}, function (data) {
      //   vm.messages = data;
      // })
      vm.messages = [
    {
      "name":"zjz"
    },
    {
      "name":"123"
    },
    {
      "name":"abc"
    }
    ];
    },

    // show: function (message) {
    //   if (message.static) {
    //     message.static = false;
    //   } else {
    //     message.static = true;
    //   }
    // },
    doRefresh: function () {
      $timeout(function () {
        vm.messages = [
    {
      "name":"a"
    },
    {
      "name":"b"
    },
    {
      "name":"c"
    }
    ];

        $scope.$broadcast('scroll.refreshComplete');
      }, 1000);
    },
    loadMore: function () {
      // vm.pagination.currentPage += 1;
        data = [
    {
      "name":"1"
    },
    {
      "name":"2"
    },
    {
      "name":"3"
    },
    {
      "name":"4"
    },
    {
      "name":"5"
    },
    {
      "name":"6"
    },
    {
      "name":"7"
    },
    {
      "name":"8"
    },
    {
      "name":"abc1"
    },
    ];
        vm.messages = vm.messages.concat(data);
        if (data.length == 0) {
          vm.moredata = true;
        };
        $scope.$broadcast('scroll.infiniteScrollComplete');
    }
  };
  vm.init();
    $scope.$on('$ionicView.loaded', function() {
  ionic.Platform.ready( function() {
    $timeout(function () {
      if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
    },3000);
  });
});
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($rootScope, $timeout, $interval, $scope, $http,$state) {
    $scope.goBack = function () {
      $state.go('tab.account');
    };
    var vm = $scope.vm = {
    moredata: false,
    messages: [],
    // pagination: {
    //   perPage: 5,
    //   currentPage: 1
    // },
    init: function () {
      // services.getMessages({perPage: vm.pagination.perPage, page: vm.pagination.currentPage}, function (data) {
      //   vm.messages = data;
      // })
      vm.messages = [
    {
      "name":"zjz",
      img: ['img/1.jpg','img/2.jpg','img/3.jpg']
    },
    {
      "name":"123",
      img: ['img/4.jpg','img/5.jpg','img/6.jpg']
    },
    {
      "name":"abc",
      img: ['img/7.jpg','img/8.jpg','img/9.jpg']
    }
    ];
    // $scope.items = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg'];
    },

    // show: function (message) {
    //   if (message.static) {
    //     message.static = false;
    //   } else {
    //     message.static = true;
    //   }
    // },
    doRefresh: function () {
      $timeout(function () {
        vm.messages = [
    {
      "name":"a",
      img: ['img/11.jpg','img/12.jpg','img/13.jpg']
    },
    {
      "name":"b",
      img: ['img/14.jpg','img/15.jpg','img/16.jpg']
    },
    {
      "name":"c",
      img: ['img/17.jpg','img/2.jpg','img/8.jpg']
    }
    ];
    // $scope.items = ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg'];
    $scope.$broadcast('scroll.refreshComplete');
  }, 1000);
    },
    loadMore: function () {
      // vm.pagination.currentPage += 1;
        data = [
    {
      "name":"1",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"2",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"3",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"4",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"5",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"6",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"7",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"8",
      img: ['img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg']
    },
    {
      "name":"abc1",
      img: ['img/10.jpg','img/11.jpg']
    },
    ];
        vm.messages = vm.messages.concat(data);
        if (data.length == 0) {
          vm.moredata = true;
        };
        $scope.$broadcast('scroll.infiniteScrollComplete');
    }
  };
  vm.init();
})

.controller('ChatsCtrl', function($rootScope, $timeout, $interval, $scope, $http, $state) {
    var vm = $scope.vm = {
    moredata: false,
    messages: [],
    // pagination: {
    //   perPage: 5,
    //   currentPage: 1
    // },
    init: function () {
      // services.getMessages({perPage: vm.pagination.perPage, page: vm.pagination.currentPage}, function (data) {
      //   vm.messages = data;
      // })
      vm.messages = [
    {
      "name":"zjz"
    },
    {
      "name":"123"
    },
    {
      "name":"abc"
    }
    ];

    },

    // show: function (message) {
    //   if (message.static) {
    //     message.static = false;
    //   } else {
    //     message.static = true;
    //   }
    // },
    doRefresh: function () {
      $timeout(function () {
        vm.messages = [
    {
      "name":"a"
    },
    {
      "name":"b"
    },
    {
      "name":"c"
    }
    ];

        $scope.$broadcast('scroll.refreshComplete');
      }, 1000);
    },
    loadMore: function () {
      // vm.pagination.currentPage += 1;
        data = [
    {
      "name":"1"
    },
    {
      "name":"2"
    },
    {
      "name":"3"
    },
    {
      "name":"4"
    },
    {
      "name":"5"
    },
    {
      "name":"6"
    },
    {
      "name":"7"
    },
    {
      "name":"8"
    },
    {
      "name":"abc1"
    },
    ];
        vm.messages = vm.messages.concat(data);
        if (data.length == 0) {
          vm.moredata = true;
        };
        $scope.$broadcast('scroll.infiniteScrollComplete');
    }
  };
  vm.init();
  $scope.goBack = function () {
    $state.go('tab.account');
  };
})

.controller('MineCtrl', function($scope) {})

.controller('AccountCtrl', function($scope,$state) {
  $scope.goToFriends = function () {
    // console.log(111);
    $state.go('friends');
  };
});
