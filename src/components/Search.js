import React from 'react';

function Search(){
  return(
    <form>
      <label>
        <input type="text" name="search" placeholder="Search" />
      </label>
      <input type="submit" value="Tweet" />
    </form>
  );
}
export default Search;