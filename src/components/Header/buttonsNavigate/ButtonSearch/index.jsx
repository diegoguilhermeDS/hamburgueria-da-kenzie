import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../../../../providers/SearchContext";
import { StyledButtonSearch } from "./style";

const ButtonSearch = ({setDisplayInput}) => {
  const {showInput} = useSearch()

  return (
    <StyledButtonSearch onClick={showInput}>
      <FaSearch />
    </StyledButtonSearch>
  );
};

export default ButtonSearch;
