'use strict';

import offlineMessageTpl from './offline-message.html';
import offlineMessageController from './offline-message.controller';

export default class offlineMessageComponent {
    constructor() {
        this.templateUrl = offlineMessageTpl;
        this.controller = offlineMessageController;
    }
}