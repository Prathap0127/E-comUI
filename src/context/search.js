import { useState, useContext, createContext } from "react";

const SearchContext = createContext();

//seperate hooks to get the data from the header to pages

const SearchProvider = ({ children }) => {
  const [Search, setSearch] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[Search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

//create custom hook for context

const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
