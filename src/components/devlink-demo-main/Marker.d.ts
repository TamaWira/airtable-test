import * as React from "react";
import * as Types from "./types";

declare function Marker(props: {
  as?: React.ElementType;
  mainProps?: Types.Devlink.RuntimeProps;
  mainText?: React.ReactNode;
  savedProps?: Types.Devlink.RuntimeProps;
  mainTextProps?: Types.Devlink.RuntimeProps;
  mainAssets?: Types.Asset.Image;
  savedProp?: Types.Visibility.VisibilityConditions;
  imageProps?: Types.Devlink.RuntimeProps;
  markerProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
