var generators = require('yeoman-generator');
var mkdirp = require("mkdirp");

module.exports = generators.Base.extend({

    _createFile: function(path, fileName) {
        this.fs.copyTpl(
            this.templatePath(fileName),
            this.destinationPath(path + '/' + fileName),
            { name: this.props.name }
        );
    },

    createDirectories: function () {
        var destination = this.destinationRoot();
        var appDestination = (destination + "/app");

        mkdirp.sync(appDestination);
        mkdirp.sync(appDestination + "/assets");
        mkdirp.sync(appDestination + "/assets/style");
        mkdirp.sync(appDestination + "/assets/fonts");
        mkdirp.sync(appDestination + "/assets/sounds");
        mkdirp.sync(appDestination + "/assets/images");
        mkdirp.sync(appDestination + "/ui");
        mkdirp.sync(appDestination + "/shared");
        mkdirp.sync(appDestination + "/ui/screens");
        mkdirp.sync(appDestination + "/game");
        mkdirp.sync(appDestination + "/game/entities");
        mkdirp.sync(appDestination + "/game/groups");
        mkdirp.sync(appDestination + "/build");
    },

    createFiles: function() {
        var destination = this.destinationRoot();
        var appDestination = (destination + "/app");

/*        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(appDestination + '/index.html'),
            { name: this.props.name }
        );*/

        this._createFile(destination, 'package.json');
        this._createFile(destination, 'gulpfile.js');

        this._createFile(appDestination + "/ui", 'ui.module.js');
        this._createFile(appDestination + "/game", 'game.js');
        this._createFile(appDestination + "/shared", 'shared.module.js');
        this._createFile(appDestination + "/shared", 'game.directive.js');

        this._createFile(appDestination, 'index.html');
        this._createFile(appDestination, 'app.js');
    },

    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : this.appname // Default to current folder name
        }]).then(function (answers) {
            this.props = answers;
        }.bind(this));
    }
});