import React, { useState } from "react";
import TaskService from "../service/task-service";
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
    setTitleText("");
    setDescriptionText("");
  };
  const onTaskAdd = async (e) => {
    const token = localStorage.getItem("userToken");
    e.preventDefault();
    try {
      const response = await TaskService.addTask(token, titleText, "description", "2022-4-30");
      addTask(titleText, "description", "2022-4-30");
    } catch (err) {
      console.log(err);
    }
    setTitleText("");
  };
 

  return (
    <div>
      <div className={"flex flex-col w-60"}>
        <form onSubmit={onTaskAdd} className={"flex flex-row"}>
          <input
            type="text"
            onFocus={onAddTaskHandle}
            value={titleText}
            style={{ width: "240px" }}
            onChange={onTitleChange}
            className={"bg-transparent w-40 px-2 py-2 outline-none ml-2 "}
            placeholder="Add new task..."
          />
          <input
            className={"text-sm bg-green-400 text-white px-2 py-1 rounded-full"}
            type="submit"
          />
        </form>
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
