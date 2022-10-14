var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/App.tsx
import React2 from "react";

// src/Components/CustomForm.jsx
import React from "react";
var CustomForm = () => {
  return /* @__PURE__ */ React.createElement("div", null, "Child App");
};
var CustomForm_default = CustomForm;

// src/App.tsx
function App(props) {
  return /* @__PURE__ */ React2.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React2.createElement(CustomForm_default, __spreadValues({}, props)));
}
var App_default = App;
export {
  App_default as default
};
