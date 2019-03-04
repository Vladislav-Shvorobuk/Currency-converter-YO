'use strict';

export default class OfflineMessageController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onInit() {
        this.$log.log('Hello from the offline-message component controller!');
    }
}