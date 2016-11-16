/**
 * Created by phuc.ngo on 16/11/2016.
 */
(function() {
    'use strict';

    angular.module('app')
        .controller('welcome2', [welcome]);

    function welcome() {
        var vm = this;
        vm.activate = activate;
        activate();

        function activate() {
            vm.computerOptions = {
                dataSource: {
                    data: [{
                        name: "Macbook pro",
                        id: 1
                    }, {
                        name: "Macbook air",
                        id: 2
                    }, {
                        name: "Mac pro",
                        id: 3
                    }]
                },
                dataTextField: 'name',
                dataValueField: 'id',
                optionLabel: 'Select a computer...'
            };
        }
    }
})();