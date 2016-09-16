/**
 * Created by daf on 16.09.2016.
 */

var app = angular.module('indexAppDaf', ['ui.router', 'pascalprecht.translate', 'ngSanitize'])
 .config(['$stateProvider', function ($stateProvider) {
   $stateProvider
     .state('gasCollection', {
       url: '/gascollection',
       templateUrl: 'Static/gascollection/index.html',
       //controller: 'gasCollectionCtrl',
       // onEnter: function ($state, roles) {
       //
       //   if (!vmIsAuthorized('gasCollection', roles))
       //     $state.go('app.error', { code: 'unauthorized' });
       // }
     });

     // .state({
     //   name: 'reports',
     //   url: '/reports',
     //   //template: '<h3>It is area for reports</h3>'
     //   templateUrl: 'Static/gascollection/reports.html'
     // })
     //
     // .state({
     // name: 'trends',
     // url: '/trends',
     // // template: '<h3>It is area for trends</h3>'
     // templateUrl: 'Static/gascollection/trends.html'
     // });

 }]);