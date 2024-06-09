"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchBoxx } from "./SearchBoxx";

export function ModalSearch({
  as: _Component = _Builtin.Block,
  mainSlot,
  mainProps = {},
  backdropProps = {},
}) {
  return (
    <_Component className="modal-search" tag="div">
      <_Builtin.Block className="backdrop" tag="div" {...backdropProps} />
      <_Builtin.Block className="slot-search" tag="div">
        {mainSlot ?? (
          <>
            <SearchBoxx />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
