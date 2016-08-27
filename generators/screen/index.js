var generators = require('yeoman-generator');
var mkdirp = require("mkdirp");

module.exports = generators.Base.extend({

    _createFile: function(fileName) {
        var destination = this.destinationRoot();
        var screenDestination = (destination + "/app/ui/screens");

        this.fs.copyTpl(
            this.templatePath(fileName),
            this.destinationPath(screenDestination + "/" +
                this.props.name + "/" + this.props.name + "." + fileName),
            { name: this.props.name }
        );
    },

    createFiles: function() {

        this._createFile("module.js");
        this._createFile("controller.js");
        this._createFile("route.js");
        this._createFile("view.html");

    },

    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your route name',
            default : 'myroute' // Default to current folder name
        }]).then(function (answers) {
            this.props = answers;
        }.bind(this));
    }
});