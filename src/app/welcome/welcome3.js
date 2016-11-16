/**
 * Created by phuc.ngo on 16/11/2016.
 */
(function() {
    'use strict';

    angular.module('app')
        .controller('welcome3', [welcome3]);

    function welcome3() {
        var vm = this;
        vm.computerChosen = false;
        vm.selectedComputer ="";
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

            vm.computerChange - function(e){
                console.log(e.sender.text());
                vm.computerChange = true;
                if(e.sender.text === "Select a computer ...."){
                    vm.computerChosen =false;
                }
            }
        }
    }
})();