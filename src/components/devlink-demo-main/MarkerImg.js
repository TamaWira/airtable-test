"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-68":{"id":"e-68","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-69"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716608451546},"e-69":{"id":"e-69","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-68"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ef615b43-c963-3d70-b8da-e89269ffae91","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1716608451546}},"actionLists":{"a-25":{"id":"a-25","title":"anim-marker-hover","actionItemGroups":[{"actionItems":[{"id":"a-25-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-25-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"yValue":53,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-25-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"value":"block"}}]},{"actionItems":[{"id":"a-25-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-25-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1716608092461},"a-26":{"id":"a-26","title":"anim-marker-hover-out","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeIn","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-26-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".marker-image-hover","selectorGuids":["58a34c04-723c-2fa1-7083-ef0b2c4d5d34"]},"yValue":53,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1716608092461}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MarkerImg({
  as: _Component = _Builtin.Image,
  mainAssets = "https://uploads-ssl.webflow.com/65263daf2ffd481f6f06e33f/653675ad3a62d8fb5df72d98_Screen%20Shot%202023-10-23%20at%208.30.57%20PM.png",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="marker-image-hover zoom"
      loading="lazy"
      width="auto"
      height="auto"
      alt=""
      src={mainAssets}
    />
  );
}
