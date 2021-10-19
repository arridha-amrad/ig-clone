import { useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../utils/AxiosInterceptors";
import SearchResult from "./SearchResult";

export interface ISearchResult {
   username: string;
   imageURL: string;
   fullName?: string;
}

const NavSearch = () => {
   const [search, setSearch] = useState("");
   const [searchFocus, setSearchFocus] = useState(false);
   const [results, setResult] = useState<ISearchResult[]>([]);

   const searchUser = () => {
      axiosInstance
         .get(`/user/find/${search}`)
         .then((res) => setResult(res.data))
         .catch((err) => console.log(err));
   };

   return (
      <NavSearchArea>
         <Search searchFocus={searchFocus}>
            <InputSearch
               onFocus={() => setSearchFocus(true)}
               onBlur={() => setSearchFocus(false)}
               onKeyUp={searchUser}
               name="search"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="in"
               placeholder="Search"
            />
            <i className="fas fa-search search"></i>
            <i className="fas fa-times-circle times"></i>
            {search && <SearchResult setSearch={setSearch} results={results} />}
         </Search>
      </NavSearchArea>
   );
};
export default NavSearch;

const NavSearchArea = styled.div`
   display: none;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;

   @media (min-width: 600px) {
      display: flex;
   }
`;

interface NavSearchProps {
   searchFocus?: boolean;
}
const Search = styled.div<NavSearchProps>`
   height: 29px;
   width: 214px;
   position: relative;
   background-color: #fafafa;

   .search {
      position: absolute;
      top: 50%;
      left: ${(props) => (props.searchFocus ? "8%" : "40%")};
      transform: translate(-50%, -50%);
      color: #ccc;
      font-size: 12px;
   }

   .times {
      display: ${(props) => (props.searchFocus ? "block" : "none")};
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #ccc;
      font-size: 12px;
      cursor: pointer;
   }
`;

const InputSearch = styled.input`
   background-color: transparent;
   border: 1px solid #ccc;
   height: 100%;
   width: 100%;
   padding-left: 6rem;
   outline: none;
   &:focus {
      padding-left: 1.8rem;
   }
`;
