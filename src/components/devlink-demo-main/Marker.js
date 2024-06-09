"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-68":{"id":"e-68","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716608451546},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716608451546}},"actionLists":{"a-25":{"id":"a-25","title":"anim-marker-hover","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"yValue":53,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-25-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"value":"block"}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-25-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716608092461},"a-26":{"id":"a-26","title":"anim-marker-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-26-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"yValue":53,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716608092461}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Marker({
  as: _Component = _Builtin.Block,
  mainProps = {},
  mainText = (
    <>
      {"$ 5.8 M"}
      <br />
    </>
  ),
  savedProps = {},
  mainTextProps = {},
  mainAssets = "https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/65f75f0a21e5ea2f016ee8f6_sidekix-media-1vMz2_MclrM-unsplash.png",
  savedProp = true,
  imageProps = {},
  markerProps = {},
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="marker" tag="div" {...mainProps}>
      <_Builtin.Image
        className="marker-image-hover"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={mainAssets}
        {...imageProps}
      />
      <_Builtin.Block
        className="marker-pill"
        data-w-id="ef615b43-c963-3d70-b8da-e89269ffae91"
        tag="div"
        {...markerProps}
      >
        <_Builtin.HtmlEmbed
          className="code-embed"
          value="%3Csvg%20width%3D%2213px%22%20height%3D%2213px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%3E%0A%20%20%20%20%3Cg%20id%3D%22icon-action-heart%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12%2C19%20C12.1691843%2C19%2012.4108761%2C18.8932462%2012.5881168%2C18.7941176%20C17.1238671%2C16.0490196%2020%2C12.8540305%2020%2C9.60566449%20C20%2C6.90631808%2018.0422961%2C5%2015.5125881%2C5%20C13.9415911%2C5%2012.7331319%2C5.82352941%2012%2C7.08169935%20C11.2829809%2C5.83115468%2010.0584089%2C5%208.48741188%2C5%20C5.95770393%2C5%204%2C6.90631808%204%2C9.60566449%20C4%2C12.8540305%206.87613293%2C16.0490196%2011.4199396%2C18.7941176%20C11.5891239%2C18.8932462%2011.8308157%2C19%2012%2C19%20Z%22%20id%3D%22Path%22%20fill%3D%22currentColor%22%20fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
          {...savedProps}
        />
        <_Builtin.Block tag="div" {...mainTextProps}>
          {mainText}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
