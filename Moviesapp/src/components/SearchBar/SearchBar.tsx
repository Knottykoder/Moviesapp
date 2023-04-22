import { SearchBox, SearchIcon, SearchInput } from "./StyledSearch"
import { SearchBarInterface } from "./types"

const SearchBar: React.FC<SearchBarInterface> = ({
    searchQuery,
    setSearchQuery
}) => {
  return (
    <SearchBox>
        <SearchIcon src="../../assets/icons8-search.svg"/>
        <SearchInput placeholder="Search Movie.." onChange={(e)=> setSearchQuery(e.target.value)} value={searchQuery}/>
    </SearchBox>
  )
}

export default SearchBar