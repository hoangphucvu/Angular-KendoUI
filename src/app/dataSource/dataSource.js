/**
 * Created by phuc.ngo on 15/12/2016.
 */
/*
 * @Author: hoangphucvu
 * @Date:   2016-11-16 13:26:20
 * @Last Modified by:   hoangphucvu
 * @Last Modified time: 2016-11-16 14:15:48
 */
(function () {
    'use strict';

    angular.module('app')
        .controller('dataSource', [dataSource]);

    function dataSource() {
        var vm = this;
        vm.activate = activate;
        activate();

        function activate() {
            vm.gridData = new kendo.data.ObservableArray([
                {feature: "Disk", details: "256mb"},
                {feature: "Ram", details: "16gb"},
                {feature: "Monitor", details: "Dell"}
            ]);
            vm.gridColumns = [
                {field: "feature", title: "Feature"},
                {field: "details", title: "Details"}
            ];
            vm.update = function () {
                vm.gridData[0].set("details", "1TB");
            }
        }
    }
})();