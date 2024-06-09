import * as React from "react";
import * as Types from "./types";

declare function ModalSearch(props: {
  as?: React.ElementType;
  mainSlot?: Types.Devlink.Slot;
  mainProps?: Types.Devlink.RuntimeProps;
  backdropProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
