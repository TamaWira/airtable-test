import * as React from "react";
import * as Types from "./types";

declare function MarkerWrapper(props: {
  as?: React.ElementType;
  mainSlot?: Types.Devlink.Slot;
  mainProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
