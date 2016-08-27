var angular = require("angular");
require("angular-ui-router");

var moduleName = "<%= name %>";

var <%= name %>Module = angular.module(moduleName, [
    "ui.router"
]);

<%= name %>Module.name = moduleName;

<%= name %>Module.controller("<%= name %>Controller", require("./<%= name %>.controller"));

<%= name %>Module.config(require("./<%= name %>.route"));

module.exports = <%= name %>Module;