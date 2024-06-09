"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { MarkerImg } from "./MarkerImg";
import { Marker } from "./Marker";

export function MarkerWrapper({
  as: _Component = _Builtin.Block,
  mainSlot,
  mainProps = {},
}) {
  return (
    <_Component className="marker-wrapper" tag="div" {...mainProps}>
      {mainSlot ?? (
        <>
          <MarkerImg />
          <Marker />
        </>
      )}
    </_Component>
  );
}
