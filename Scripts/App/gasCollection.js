// angular.module('indexApp')
angular.module('indexAppDaf')

  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider

      .state({
        name: 'gasCollection.reports',
        url: '/reports',
        controller: 'gasCollectionReportsCtrl',
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

  }])

  .controller('gasCollectionReportsCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.showFullData = true;
    $scope.dataDaily = [
      {datetime: '01:00', val: 105, sumVal: 105 },
      {datetime: '02:00', val: 120, sumVal: 225 },
      {datetime: '03:00', val: 101, sumVal: 326 },
      {datetime: '04:00', val: 93, sumVal:  419 },
      {datetime: '05:00', val: 84, sumVal:  503 },
      {datetime: '06:00', val: 94, sumVal:  597 },
      {datetime: '07:00', val: 88, sumVal:  685 },
      {datetime: '08:00', val: 98, sumVal:  783 },
      {datetime: '09:00', val: 107, sumVal: 890 },
      {datetime: '10:00', val: 89, sumVal:  979 },
      {datetime: '11:00', val: 109, sumVal: 1088 },
      {datetime: '12:00', val: 98, sumVal:  1186 },
      {datetime: '13:00', val: 103, sumVal: 1289 },
      {datetime: '14:00', val: 94, sumVal:  1383 },
      {datetime: '15:00', val: 115, sumVal: 1498 },
      {datetime: '16:00', val: 100, sumVal: 1598 },
      {datetime: '17:00', val: 120, sumVal: 1718 },
      {datetime: '18:00', val: 93, sumVal:  1811 },
      {datetime: '19:00', val: 100, sumVal: 1911 },
      {datetime: '20:00', val: 108, sumVal: 2019 },
      {datetime: '21:00', val: 100, sumVal: 2119 },
      {datetime: '22:00', val: 106, sumVal: 2225 },
      {datetime: '23:00', val: 105, sumVal: 2330 },
      {datetime: '23:59', val: 109, sumVal: 2439 }
    ];
  }]);