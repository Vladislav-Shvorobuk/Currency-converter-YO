'use strict';

import converterTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/converter/converter.html';


function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('converter', {
          url: '/converter',
          templateUrl: converterTemplate,
          controller: 'converterController',
          resolve: {
            asyncPreloading: resolverProvider.converterPagePrealoading
          }
        })


  $urlRouterProvider.otherwise('/');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

