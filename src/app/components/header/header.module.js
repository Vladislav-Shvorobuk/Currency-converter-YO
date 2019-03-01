'use strict';

import HeaderComponent from './header.component';

const headerModule = angular.module('header-module', []);

headerModule
    .component('headerTest', new HeaderComponent());

export default headerModule;