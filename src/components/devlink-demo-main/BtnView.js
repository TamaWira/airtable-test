"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BtnView({
  as: _Component = _Builtin.Link,
  iconSlot,
  mainProps = {},
  mainText = "mainText",

  mainLink = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="btn-view"
      button={false}
      block="inline"
      options={mainLink}
      {...mainProps}
    >
      <_Builtin.Image
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/660c94b22ade03b4e2be1a7d_Shape.svg"
      />
      <_Builtin.Block tag="div">{mainText}</_Builtin.Block>
    </_Component>
  );
}
