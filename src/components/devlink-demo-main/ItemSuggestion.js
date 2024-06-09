"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchIcon } from "./SearchIcon";

export function ItemSuggestion({
  as: _Component = _Builtin.Block,
  mainProps = {},
  suggestionText = (
    <>
      {"suggestionText"}
      <br />
    </>
  ),
}) {
  return (
    <_Component className="itemsuggestion" tag="div" {...mainProps}>
      <SearchIcon />
      <_Builtin.Block className="text-block-23" tag="div">
        {suggestionText}
      </_Builtin.Block>
    </_Component>
  );
}
