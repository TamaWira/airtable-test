import * as React from "react";
import * as Types from "./types";

declare function SearchSuggestion(props: {
  as?: React.ElementType;
  searchSuggestionContainerProps?: Types.Devlink.RuntimeProps;
  mainSlot?: Types.Devlink.Slot;
  itemSuggestionProps?: Types.Devlink.RuntimeProps;
  itemSuggestionText?: React.ReactNode;
}): React.JSX.Element;
