import React, { useState } from "react";

export const AddTask = (props) => {
  const { addTask } = props;

  const [addFocused, setAddFocused] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");

  const onAddTaskHandle = (e) => {
    setAddFocused(true);
  };
  
  const onTitleChange = (e) => {
    setTitleText(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescriptionText(e.target.value);
  };
  const onAddButtonHandle = () => {
      addTask(titleText, descriptionText);
      setTitleText("")
      setDescriptionText("");

  }
  

  return (
    <div>
      <div className={"flex flex-col w-60"}>
        <input
          type="text"
          onFocus={onAddTaskHandle}
          value={titleText}
          style={{ width: "240px" }}
          onChange={onTitleChange}
          className={"bg-transparent w-40 px-2 py-2 outline-none ml-2 "}
          placeholder="Add new task..."
        />
        <div className={"border-b-2 w-full"}> </div>{" "}
        {/* {addFocused ? (
          <input
            type="text"
            onFocus={onAddTaskHandle}
            value={descriptionText}
            onChange={onDescriptionChange}
            className={
              "bg-transparent text-sm py-2 outline-none ml-2 max-w-full"
            }
            placeholder="Description"
          />
        ) : (
          ""
        )}
        <button onClick={onAddButtonHandle}>Add</button> */}
      </div>{" "}
    </div>
  );
};
