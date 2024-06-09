import * as React from "react";
import * as Types from "./types";

declare function BtnView(props: {
  as?: React.ElementType;
  iconSlot?: Types.Devlink.Slot;
  mainProps?: Types.Devlink.RuntimeProps;
  mainText?: React.ReactNode;
  mainLink?: Types.Basic.Link;
}): React.JSX.Element;
