// angular.module('indexApp')
angular.module('indexAppDaf')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      // .state('gasCollection', {
      //   url: '/gascollection',
      //   templateUrl: 'Static/gascollection/index.html',
      //   controller: 'gasCollectionCtrl',
      //   // onEnter: function ($state, roles) {
      //   //
      //   //   if (!vmIsAuthorized('gasCollection', roles))
      //   //     $state.go('app.error', { code: 'unauthorized' });
      //   // }
      // })

      .state({
        name: 'gasCollection.reports',
        url: '/reports',
        //template: '<h3>It is area for reports</h3>'
        templateUrl: 'Static/gascollection/reports.html'
      })

      .state({
        name: 'gasCollection.trends',
        url: '/trends',
        // template: '<h3>It is area for trends</h3>'
        templateUrl: 'Static/gascollection/trends.html'
      });

  }])

.controller('gasCollectionCtrl', ['$scope', 'indexService', '$state', 'roles', function ($scope, indexService, $state, roles) {


    

}]);