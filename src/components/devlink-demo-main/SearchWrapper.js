"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchIcon } from "./SearchIcon";
import { InputSearch } from "./InputSearch";
import { ClearInput } from "./ClearInput";
import { SearchActionButton } from "./SearchActionButton";

export function SearchWrapper({ as: _Component = _Builtin.Block, mainSlot }) {
  return (
    <_Component className="search-wrapper" tag="div">
      {mainSlot ?? (
        <>
          <SearchIcon />
          <InputSearch />
          <ClearInput />
          <SearchActionButton />
        </>
      )}
    </_Component>
  );
}
