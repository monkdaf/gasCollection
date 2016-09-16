/**
 * Created by daf on 16.09.2016.
 */

var app = angular.module('indexAppDaf', ['ui.router', 'pascalprecht.translate', 'ngSanitize'])
 .config(['$stateProvider', function ($stateProvider) {
   $stateProvider
     .state({
       name: 'reports',
       url: '/reports',
       template: '<h3>It is area for reports</h3>'
     })

     .state({
     name: 'trends',
     url: '/trends',
     template: '<h3>It is area for trends</h3>'
     });

 }]);