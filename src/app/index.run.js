(function() {
  'use strict';

  angular
    .module('scheduling')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
