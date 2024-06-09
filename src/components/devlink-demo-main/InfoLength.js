"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function InfoLength({
  as: _Component = _Builtin.Block,
  mainText = "30 properties",
}) {
  return (
    <_Component className="btn-view" tag="div">
      <_Builtin.Block tag="div">{mainText}</_Builtin.Block>
    </_Component>
  );
}
