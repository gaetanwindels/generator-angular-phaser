/**
 * Game entry point
 */
var game = {};

var instance = null;

game.start = function(elmt) {
    if (instance != null) return;

    instance = new Phaser.Game(window.innerWidth * window.devicePixelRatio,
        window.innerHeight * window.devicePixelRatio,
        Phaser.CANVAS, elmt);
}

game.getInstance = function() {
    return instance;
}

module.exports = game;