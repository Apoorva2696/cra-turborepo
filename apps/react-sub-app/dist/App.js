"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/App.tsx
var App_exports = {};
__export(App_exports, {
  default: () => App_default
});
module.exports = __toCommonJS(App_exports);
var import_react2 = require("react");

// src/Components/CustomForm.jsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var CustomForm = ({ addTask, userInput, setUserInput }) => {
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
    onSubmit: handleSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        value: userInput,
        type: "text",
        onChange: handleChange,
        placeholder: "Enter task..."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        children: "Submit"
      })
    ]
  });
};
var CustomForm_default = CustomForm;

// src/App.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function App(props) {
  const [userInput, setUserInput] = (0, import_react2.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "App",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomForm_default, {
      ...props,
      userInput,
      setUserInput
    })
  });
}
var App_default = App;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
