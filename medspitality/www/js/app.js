// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })


  .state('app.profileslist', {
    url: '/profileslist',
    views: {
      'menuContent': {
        templateUrl: 'templates/profiles.html',
        controller: 'ProfileslistCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.feedbacklist', {
    url: '/feedbacklist',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedbacklist.html',
        controller: 'FeedbacklistCtrl'
      }
    }
  })

.state('app.timeline', {
    url: '/timeline',
    views: {
      'menuContent': {
        templateUrl: 'templates/timeline.html',
        controller: 'TimelineCtrl'
      }
    }
  })

  .state('app.feedbackdetail', {
    url: '/feedbackdetail/:feedbackId',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedbackdetail.html',
        controller: 'FeedbackdetailCtrl'
      }
    }
  })

  .state('app.social', {
    url: '/social',
    views: {
      'menuContent': {
        templateUrl: 'templates/social.html',
        controller: 'SocialCtrl'
      }
    }
  })

  .state('app.whoiswho', {
    url: '/whoiswho',
    views: {
      'menuContent': {
        templateUrl: 'templates/whoiswho.html',
        controller: 'WhoisWhoCtrl'
      }
    }
  })

  .state('app.chat', {
    url: '/chat/:personId/:personName',
    views: {
      'menuContent': {
        templateUrl: 'templates/chat.html',
        controller: 'ChatCtrl'
      }
    }
  })

  .state('app.patienceprofile', {
    url: '/patienceprofile',
    views: {
      'menuContent': {
        templateUrl: 'templates/patienceprofile.html',
        controller: 'PatienceprofileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profileslist');
});
