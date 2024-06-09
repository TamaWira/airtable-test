"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchBoxx } from "./SearchBoxx";
import { BtnView } from "./BtnView";

export function WrapperMapSearchBox({
  as: _Component = _Builtin.Block,
  mainSlot,
  searchSuggestionContainerSlot,
  searchSuggestionContainerProps = {},
  itemSuggestionProps = {},
  itemSuggestionText = "Boston",
}) {
  return (
    <_Component className="map-wrapper-seach-center" tag="div">
      {mainSlot ?? (
        <>
          <SearchBoxx />
          <BtnView mainText="Show list" />
        </>
      )}
    </_Component>
  );
}
