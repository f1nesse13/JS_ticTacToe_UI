class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $row = $('<ul>');
    this.$el.append($row);
    for (let y = 0; y < 9; y++) {
      const $square = $('<li>')
        .addClass(`square_${y}`)
        .addClass('squares');
      $row.append($square);
    }
  }
}

module.exports = View;
