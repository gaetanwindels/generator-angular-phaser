var generators = require('yeoman-generator');
var mkdirp = require("mkdirp");

module.exports = generators.Base.extend({

    createFiles: function() {
        var destination = this.destinationRoot();
        var entityDestination = (destination + "/app/game/groups/");

        this.fs.copyTpl(
            this.templatePath("group.js"),
            this.destinationPath(entityDestination + "/" + this.props.name + "Group.js"),
            { name: this.props.name }
        );

    },

    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your group name',
            default : 'Monster'
        }]).then(function (answers) {
            this.props = answers;
        }.bind(this));
    }
});