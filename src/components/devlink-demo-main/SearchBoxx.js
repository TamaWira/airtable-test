"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchWrapper } from "./SearchWrapper";
import { SearchSuggestion } from "./SearchSuggestion";

export function SearchBoxx({
  as: _Component = _Builtin.Block,
  mainSlot,
  suggestionSlot,
  mainProps = {},
  divBlockSlot,
  closeProps = {},
  test,
}) {
  return (
    <_Component className="searchbox" tag="div">
      {suggestionSlot ?? (
        <>
          <SearchWrapper />
          <SearchSuggestion mainSlot="" />
        </>
      )}
    </_Component>
  );
}
