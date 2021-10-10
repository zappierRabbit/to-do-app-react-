import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Task from "./Components/Task";
import Navbar from "./Components/Navbar";
import AddTask from "./Components/AddTask";
import { Tasks } from "./Helper/Context";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [editItem, setEditItem] = useState(null);


  
  return (
    <Tasks.Provider
      value={{
        input,
        setInput,
        tasks,
        setTasks,
        update,
        setUpdate,
        editItem,
        setEditItem,
      }}
    >
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Task} />
          <Route exact path="/addTask" component={AddTask} />
        </Switch>
      </main>
    </Tasks.Provider>
  );
}

export default App;
