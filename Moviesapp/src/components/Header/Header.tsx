import SearchBar from "../SearchBar/SearchBar";
import { AppName, Container, Head, MovieLogo } from "./StyledHeader";
import { Copy } from "../../Const";

interface HeaderInterface {
  searchQuery: string;
  setSearchQuery(args: string): void;
}

const Header: React.FC<HeaderInterface> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Container>
      <Head>
        <AppName>
          <MovieLogo src="/movielogo.svg" />
          {Copy.HEADER_TITLE}
        </AppName>
        <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </Head>
    </Container>
  );
};

export default Header;
