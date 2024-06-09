import * as React from "react";
import * as Types from "./types";

declare function BtnFilterActive(props: {
  as?: React.ElementType;
  filterText?: React.ReactNode;
  mainProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
