'use strict';

import footerModule from './components/footer/footer.module';
import headerModule from './components/header/header.module';
import offlineMessageModule from './components/offline-message/offline-message.module';

export default angular.module('index.components', [
	headerModule.name,
	footerModule.name,
	offlineMessageModule.name
]);
