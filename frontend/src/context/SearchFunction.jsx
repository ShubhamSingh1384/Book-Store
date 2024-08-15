import React, { createContext, useContext } from 'react'


export const SearchContext = createContext();
export const SearchFunction = ({children}) => {
    const [searchValue, setSearchValue] = React.useState('');

    
  return (
    <SearchContext.Provider value={[searchValue, setSearchValue]}>
        {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext);
