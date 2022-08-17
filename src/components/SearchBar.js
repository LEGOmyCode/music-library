// import { useContext } from "react";
// import { SearchContext } from "../context/SearchContext";
import { useState } from "react";

// function SearchBar(props) {
//   const { term, handleSearch } = useContext(SearchContext);

//   return (
//     <form>
//       <input ref={term} type="text" placeholder="Enter a search term here" />
//       <button onClick={(e) => handleSearch(e, term.current.value)}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default SearchBar;
const SearchBar = (props) => {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default SearchBar;
