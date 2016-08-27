/**
 * Ui entry point
 */
var angular = require("angular");

var uiModule = angular.module("ui", [
    require("./../shared/shared.module").name
]);

uiModule.name = "ui";

module.exports = uiModule;