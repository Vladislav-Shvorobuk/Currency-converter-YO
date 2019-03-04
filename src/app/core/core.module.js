'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import convertServiceProvider from './services/converter.provider';
import currencyFilter from './filters/currency.filter';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
convertServiceProvider(shared);
currencyFilter(shared);


export default shared;
