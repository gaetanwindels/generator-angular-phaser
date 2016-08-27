<%= name %>Group = function (game) {

    Phaser.Group.call(this, game);

};

<%= name %>Group.prototype = Object.create(Phaser.Group.prototype);
<%= name %>Group.prototype.constructor = <%= name %>Group;

<%= name %>Group.prototype.update = function() {

}

module.exports = <%= name %>Group;