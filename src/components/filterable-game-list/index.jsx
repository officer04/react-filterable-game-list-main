import { useState } from 'react';
import GameList from '../game-list';
import SearchBar from '../search-bar';

const FilterableGameList = ({ games = [] }) => {
  const [filterText, setFilterText] = useState('');
  const [inWishListOnly, setInWishListOnly] = useState(false);
  console.log(inWishListOnly)

  return (
    <div className="filterable-game-list">
      <SearchBar
        filterText={filterText}
        inWishListOnly={inWishListOnly}
        setFilterText={setFilterText}
        setInWishListOnly={setInWishListOnly}
      />
      <GameList games={games} filterText={filterText}  inWishListOnly={inWishListOnly}/>
    </div>
  );
};

export default FilterableGameList;
