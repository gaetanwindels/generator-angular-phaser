var <%= name %> = function (game, x, y) {

    Phaser.Sprite.call(this, game, x, y, '<%= name %>');

    this.anchor.setTo(0.5, 0.5);

    var randomScale = 0.1 + Math.random();

    game.add.existing(this);
    game.physics.arcade.enable([this]);

};

<%= name %>.prototype = Object.create(Phaser.Sprite.prototype);
<%= name %>.prototype.constructor = <%= name %>;

<%= name %>.prototype.update = function() {

}

module.exports = <%= name %>;