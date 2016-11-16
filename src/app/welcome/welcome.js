/*
 * @Author: hoangphucvu
 * @Date:   2016-11-16 13:26:20
 * @Last Modified by:   hoangphucvu
 * @Last Modified time: 2016-11-16 13:34:31
 */
(function() {
    'use strict';

    angular.module('app')
        .controller('welcome', [welcome]);

    function welcome() {
        var vm = this;
        vm.activate = activate;
        activate();

        function activate() {

        }
    }
})();