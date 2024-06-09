"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { ItemSuggestion } from "./ItemSuggestion";

export function SearchSuggestion({
  as: _Component = _Builtin.Block,
  searchSuggestionContainerProps = {},
  mainSlot,
  itemSuggestionProps = {},
  itemSuggestionText = "New York",
}) {
  return (
    <_Component className="searchsuggestioncontainer" tag="div">
      {mainSlot ?? (
        <>
          <ItemSuggestion mainProps={{}} suggestionText="New York" />
          <ItemSuggestion mainProps={{}} suggestionText="New York" />
        </>
      )}
    </_Component>
  );
}
