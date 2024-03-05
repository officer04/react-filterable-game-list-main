import React from 'react';
import GameCategoryRow from '../game-category-row';
import GameRow from '../game-row';

const GameList = ({ games = [], filterText, inWishListOnly }) => {
  const rows = [];
  let lastCategory = '';

  games.forEach((game) => {
    if (game.name.toLowerCase().includes(filterText.toLowerCase())) {

      if (game.category !== lastCategory) {
        rows.push(<GameCategoryRow category={game.category} />);
      }

      rows.push(<GameRow {...game} />);

      lastCategory = game.category;
    }
  });

  return <ul className="game-list">{rows}</ul>;
};

export default GameList;
