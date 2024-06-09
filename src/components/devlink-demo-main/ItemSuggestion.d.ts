import * as React from "react";
import * as Types from "./types";

declare function ItemSuggestion(props: {
  as?: React.ElementType;
  mainProps?: Types.Devlink.RuntimeProps;
  suggestionText?: React.ReactNode;
}): React.JSX.Element;
