"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BtnFilterActive({
  as: _Component = _Builtin.Block,
  filterText = "4 filters",
  mainProps = {},
}) {
  return (
    <_Component className="search-button" tag="div" {...mainProps}>
      <_Builtin.Block className="div-block-12" tag="div" />
      <_Builtin.Block className="text-block-5 blue" tag="div">
        {filterText}
      </_Builtin.Block>
    </_Component>
  );
}
