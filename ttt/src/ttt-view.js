class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const that = this;
    $('ul').on('click', function(e) {
      that.makeMove(e.target);
    });
  }

  makeMove($square) {
    const posX = parseInt($($square).attr('dataposX'));
    const posY = parseInt($($square).attr('dataposY'));
    const position = [posX, posY];
    const currentMark = this.game.currentPlayer;
    try {
      this.game.playMove(position);
      $square.append(currentMark);
      const currentColor = currentMark === 'x' ? 'blue' : 'red';
      $($square).css({ 'background-color': 'white', color: currentColor });
    } catch (error) {
      alert('Invalid move');
    }

    if (this.game.isOver()) {
      this.$el.find('ul').off('click');
      const winner = this.game.winner();
      if (winner) {
        this.$el.append(`<h1>${winner} has won!</h1>`);
      } else {
        this.$el.append('Its a draw!');
      }
    }
  }

  setupBoard() {
    const $row = $('<ul>');
    this.$el.append($row);
    for (let i = 0; i < 3; i++) {
      for (let y = 0; y < 3; y++) {
        const $square = $('<li>')
          .attr('dataposX', i)
          .attr('dataposY', y)
          .addClass('squares');
        $row.append($square);
      }
    }
  }
}

module.exports = View;
