// src/App.tsx
import { useState } from "react";

// src/Components/CustomForm.jsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CustomForm = ({ addTask, userInput, setUserInput }) => {
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return /* @__PURE__ */ jsxs("form", {
    onSubmit: handleSubmit,
    children: [
      /* @__PURE__ */ jsx("input", {
        value: userInput,
        type: "text",
        onChange: handleChange,
        placeholder: "Enter task..."
      }),
      /* @__PURE__ */ jsx("button", {
        children: "Submit"
      })
    ]
  });
};
var CustomForm_default = CustomForm;

// src/App.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function App(props) {
  const [userInput, setUserInput] = useState("");
  return /* @__PURE__ */ jsx2("div", {
    className: "App",
    children: /* @__PURE__ */ jsx2(CustomForm_default, {
      ...props,
      userInput,
      setUserInput
    })
  });
}
var App_default = App;
export {
  App_default as default
};
