import React from "react";
import { AppUI } from "./AppUI";
import '../style/style.css';
import { TodoProvider } from "../components/TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;