angular.module('starter.controllers', [])

.controller('DashCtrl',['$scope','$timeout', function($scope,$timeout) {
  // $timeout(function () {
  //   $scope.a = 111;
  // },3000);
  // for(var i =0;i<100000;i++)
  // {
  //   for(var j = 0;j<10000;j++)
  //   {
  //     if(i==99999)
  //     {
  //       $scope.a = 111;
  //     }
  //   }
  // }
  $scope.$on('$ionicView.loaded', function() {
  ionic.Platform.ready( function() {
    $timeout(function () {
      if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
    },3000);
  });
});

}])

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

.controller('MainCtrl', function($scope, $state) {
  console.log('MainCtrl');
  
  $scope.toIntro = function(){
    $state.go('intro');
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MineCtrl', function($scope) {
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


