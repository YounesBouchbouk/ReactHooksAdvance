import React, { useRef, useReducer } from "react";
import TodoItem from "../Components/TodoItem";

const tododispatcher = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log("l'ets dd ");
      return [
        ...state,
        { title: action.title, description: action.description },
      ];
      break;
    case "CLEAR":
      return [];
    default:
      return state;
      break;
  }
};

const TodoList = () => {
  const [liste, dispatcher] = useReducer(tododispatcher, []);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handlClick = (e) => {
    e.preventDefault();

    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
    dispatcher({
      type: "ADD",
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    });
  };
  return (
    <div className="w-2/3 p-10 bg-white">
      <input
        type="text"
        ref={titleRef}
        placeholder="title"
        className="my-4 p-3 shadow-md rounded-md mx-3 w-1/3"
      />
      <input
        type="text"
        ref={descriptionRef}
        placeholder="description"
        className="my-4 p-3 shadow-md rounded-md mx-3 w-1/3"
      />
      <button
        className="p-2 bg-green-200 mr-3"
        onClick={(e) => {
          handlClick(e);
          console.log(liste);
        }}
      >
        Add
      </button>

      <button
        className="p-2 bg-red-200"
        onClick={(e) => {
          dispatcher({ type: "CLEAR" });
        }}
      >
        Clear
      </button>

      <div className="my-4 w-full">
        {liste.map((item, index) => {
          return <TodoItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
