import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div className="w-full flex ">
      <div className="w-1/2 p-2">
        <p className="font-bold text-2xl">{item.title}</p>
      </div>
      <div className="w-1/2 p-2">
        <p className="font-bold text-2xl">{item.description}</p>
      </div>
    </div>
  );
};

export default TodoItem;
