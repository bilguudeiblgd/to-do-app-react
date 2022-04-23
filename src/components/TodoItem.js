import React from "react";
import { MdDeleteOutline } from "react-icons/md";
export const TodoItem = (props) => {
  const {
    item: { title, description },
  } = props;
  const onDeleteTask = (e) => {
    console.log(e)
  }
  return (
    <div>
      <div
        className={"max-w-full mt-8 bg-white px-4 py-6 shadow-md rounded-md"}
      >
        <div className={"flex flex-row"}>
          <div>
            <input className={"mr-2"} type="checkbox" />
          </div>
          <div className={"flex flex-col flex-1"}>
            <h3 className={"text-xl mb-1"}>{title}</h3>
            <p className={"text-sm text-gray-600"}>{description}</p>
          </div>
          <div>
            <button onClick={() => onDeleteTask()}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
