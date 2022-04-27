import "./App.css";

import React, { useState } from "react";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="w-full h-screen bg-slate-50 flex justify-center items-center flex-col">
      <TodoList />
    </div>
  );
}

export default App;
