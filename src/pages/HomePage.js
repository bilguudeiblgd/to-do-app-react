import React, { useState, useEffect, useContext } from "react";

import { Checkbox } from "../components/Checkbox";
import { TodoItem } from "../components/TodoItem";
import { AddTask } from "../components/AddTask";
import { Navbar } from "../components/Navbar";
import AuthService from "../service/auth-service";
import AuthContext from "../content/AuthProvider";
import TaskService from "../service/task-service";

const HomePage = () => {
  const { auth, setAuth } = useContext(AuthContext);
  let token;
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [todoList, setTodoList] = useState([
    { title: "Design a website", description: "Figma website blabla..." },
  ]);
  // Call useEffect whenever the Auth changes.
  useEffect(() => {
   
    token = localStorage.getItem("userToken");
    if (token) {
      setLoggedIn(true);
      
      setName(auth.name);
      setId(auth.id);
      // Retreive user tasks
      retreiveUserTasks(token)
    }
  }, [auth]);

  const retreiveUserTasks = async (token) => {
    try{
      let res = await TaskService.getTask(token);
      const {data} = res;
      setTodoList([...data]); 
      }
    catch (err) {
      console.log(err);
    }
  }

  const onAddButtonHandle = (title, description) => {
    setTodoList([...todoList, { title, description }]);
  };

  return (
    <>
      <Navbar />
      <main className={"container "}>
        <div className={"max-w-2xl px-2 mt-10 mx-auto"}>
          <h1 className={"text-4xl mb-4 font-semibold"}>
            Welcome back, {name}
          </h1>{" "}
          <p className={"text-md text-gray-600"}> You 've got 4 tasks left </p>{" "}
          <div className={"mt-20 flex flex-row"}>
            {/* <Checkbox /> */}
            <AddTask
              addTask={(title, description, date) =>
                onAddButtonHandle(title, description, date)
              }
            />{" "}
          </div>{" "}
          {/* task container */}{" "}
          <div className="task-container">
            {" "}
            {todoList.map((item, index) => {
              return <TodoItem key={index} item={item} />;
            })}{" "}
          </div>{" "}
        </div>{" "}
        {/* Popup stuff the position is absolute so it doesn't matter where it is */}{" "}
      </main>{" "}
    </>
  );
};

export default HomePage;
