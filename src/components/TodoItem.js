import React from "react";

export const TodoItem = (props) => {

    const {item: {title, description}} = props;
    
    return (
    <div>
      <div
        className={"max-w-full mt-8 bg-white px-4 py-6 shadow-md rounded-md"}
      >
        <div className={"flex flex-row"}>
          <div>
            <input className={"mr-2"} type="checkbox" />
          </div>
          <div className={"flex flex-col"}>
            <h3 className={"text-xl mb-1"}>{title}</h3>
            <p className={"text-sm text-gray-600"}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
