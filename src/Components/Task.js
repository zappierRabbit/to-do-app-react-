import React, { useContext, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { Tasks } from "../Helper/Context";
import Card from "@mui/material/Card";
//import TextField from "@mui/material/TextField";

const Task = () => {
  const { tasks, setTasks } = useContext(Tasks);
  const { update, setUpdate } = useContext(Tasks);
  const { editItem, setEditItem } = useContext(Tasks);
  const { input, setInput } = useContext(Tasks);
  const [afterEdit, setAfterEdit] = useState("");

  const deleteHandler = (id) => {
    const removedItem = tasks.filter((abdullah) => {
      return abdullah.id !== id;
    });
    setTasks(removedItem);
  };

  const Edithandler = (id) => {
    const EditItems = tasks.find((task) => {
      return task.id === id;
    });
    // console.log(EditItems);
    setUpdate(true);
    setInput(EditItems.input);
    setEditItem(id);
    // console.log(EditItems);
  };

  const SaveItem = () => {
    if (input && update) {
      setTasks(
        tasks.map((itemss) => {
          if (itemss.id === editItem) {
            return { ...itemss, input: afterEdit };
          }
          return itemss;
        })
      );
    }
    setUpdate(false);
    setAfterEdit('')
  };

  // const saveItems = tasks.map((itemss) => {
  //   console.log(itemss);
  // });
  // setTasks(saveItems);

  // const SaveItem = (id) => {
  //   setUpdate(false);
  //   const changedInput = tasks.find((task) => {
  //     return task.id === id;
  //   });

  //   const updatedTasks = tasks.map((task) => {
  //     if (changedInput.id === id) {
  //       console.log(changedInput);
  //       return { ...changedInput, input: afterEdit };
  //     } else return task;
  //   });
  //   console.log(updatedTasks);
  //   setTasks(updatedTasks);
  // };

  const paperStyle = {
    padding: "10px 10px",
    width: 500,
    margin: "20px auto",
  };

  const removeAllHandler = () => {
    setTasks([])
  }

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>Tasks</h2>
          <button onClick={removeAllHandler}>Remove All</button>
          {tasks.map((items) => {
            // const { id, input } = items;
            return (
              <>
                {update && editItem === items.id && (
                  <Card
                    key={items.id}
                    style={{ background: "#DEDBDB", margin: 20 }}
                  >
                    <input
                      type="text"
                      class="form-text"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      defaultValue={items.input}
                      onChange={(e) => setAfterEdit(e.target.value)}
                    />

                    {/* <button onClick={() => Edithandler(items.id)}>Edit</button> */}

                    <button
                      style={{ background: "#DEDBDB", margin: 20 }}
                      onClick={SaveItem}
                    >
                      Save Item
                    </button>
                  </Card>
                )}

                {!update && (
                  <Card style={{ background: "#DEDBDB", margin: 20 }}>
                    <h3>{items.input}</h3>
                    <button onClick={() => Edithandler(items.id)}>Edit</button>
                    <button
                      onClick={() => deleteHandler(items.id)}
                      style={{ margin: 20 }}
                    >
                      Delete
                    </button>
                  </Card>
                )}
              </>
            );
          })}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Task;
