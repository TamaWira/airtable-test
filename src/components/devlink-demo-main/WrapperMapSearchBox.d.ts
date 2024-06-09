import * as React from "react";
import * as Types from "./types";

declare function WrapperMapSearchBox(props: {
  as?: React.ElementType;
  mainSlot?: Types.Devlink.Slot;
  searchSuggestionContainerSlot?: Types.Devlink.Slot;
  searchSuggestionContainerProps?: Types.Devlink.RuntimeProps;
  itemSuggestionProps?: Types.Devlink.RuntimeProps;
  itemSuggestionText?: React.ReactNode;
}): React.JSX.Element;
