import React from 'react'
import { useSearch } from '../context/SearchFunction'
const Search = () => {
    const [searchValue, setSearchValue] = useSearch();
    // console.log(searchValue);
  return (
    <div>Search</div>
  )
}

export default Search