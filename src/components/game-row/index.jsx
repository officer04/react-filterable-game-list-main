import React from 'react';
import GameGallery from '../game-gallery';

const GameRow = ({price, name, inWishList, images}) => {
  return (
    <li className="game-row">
      <span className="game-name">{name}</span>
      {inWishList && <span className="game-in-whish-list">В желаемом</span>}
      <GameGallery images={images}/>
      <span className="game-price">{price}</span>
    </li>
  );
};

export default GameRow;
