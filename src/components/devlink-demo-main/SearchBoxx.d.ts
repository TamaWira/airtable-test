import * as React from "react";
import * as Types from "./types";

declare function SearchBoxx(props: {
  as?: React.ElementType;
  mainSlot?: Types.Devlink.Slot;
  suggestionSlot?: Types.Devlink.Slot;
  mainProps?: Types.Devlink.RuntimeProps;
  divBlockSlot?: Types.Devlink.Slot;
  closeProps?: Types.Devlink.RuntimeProps;
  test?: Types.Devlink.Slot;
}): React.JSX.Element;
