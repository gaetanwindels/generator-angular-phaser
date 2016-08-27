module.exports = ["$stateProvider", function($stateProvider) {

    $stateProvider.state("<%= name %>", {
        url: "/<%= name %>",
        templateUrl: "ui/screens/<%= name %>/<%= name %>.view.html",
        controller: "<%= name %>Controller",
        controllerAs: "<%= name %>",
    });

}];