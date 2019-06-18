const View = require('./ttt-view.js');
const Game = require('./game.js');

$(() => {
  const $boardView = $('.ttt');
  const $game = new Game();
  const $newGameView = new View($game, $boardView);
  $boardView.append($newGameView);
});
