/**
 * Created by daf on 16.09.2016.
 */

var app = angular.module('indexAppDaf', ['ui.router', 'pascalprecht.translate', 'ngSanitize', 'n3-line-chart'])
 .config(['$stateProvider', function ($stateProvider) {
   $stateProvider
     .state('gasCollection', {
       url: '/gascollection',
       templateUrl: 'Static/gascollection/index.html',
     });
 }]);