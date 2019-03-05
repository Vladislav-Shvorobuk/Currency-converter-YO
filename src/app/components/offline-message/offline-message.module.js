'use strict';

import OfflineMessageComponent from './offline-message.component';
import './offline-message.scss';

const offlineMessageModule = angular.module('offline-message-module', []);

offlineMessageModule
    .component('offlineMessage', new OfflineMessageComponent());


offlineMessageModule.run(function($window, $rootScope) {
    'ngInject';

  $rootScope.isOffline = !navigator.onLine;

  $window.addEventListener('online', function() {
    $rootScope.$applyAsync(function() {
      $rootScope.isOffline = false;
    });
  }, false);

  $window.addEventListener('offline', function() {
    $rootScope.$applyAsync(function() {
      $rootScope.isOffline = true;
    });
  }, false);
});

export default offlineMessageModule;