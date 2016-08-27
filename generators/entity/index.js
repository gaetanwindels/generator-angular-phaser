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
        var destination = this.destinationRoot();
        var entityDestination = (destination + "/app/game/entities/");

        this.fs.copyTpl(
            this.templatePath("entity.js"),
            this.destinationPath(entityDestination + "/" + this.props.name + ".js"),
            { name: this.props.name }
        );

    },

    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your entity name',
            default : 'Entity' // Default to current folder name
        }]).then(function (answers) {
            this.props = answers;
        }.bind(this));
    }
});