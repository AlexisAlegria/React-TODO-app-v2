import React, { useState } from "react";
import TareaForm from "./components/TareaForm";
import Tarea from "./components/Tarea";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const addTodo = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

  const deleteToDoBtn = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };
  const updateToDoList = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }
      return e;
    });
    setListaTareas(listaActualizada);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 text-center main-box">
          <h1>React Todos App</h1>
          <TareaForm addTodo={addTodo} />
          <ul className="list-group pb-3">
            {listaTareas.map((e, index) => (
              <Tarea
                id={index}
                tarea={e}
                updateToDoList={updateToDoList}
                deleteToDoBtn={deleteToDoBtn}
              />
            ))}
            <li className="list-group-item counter" id="task-counter">
              {listaTareas.length}{" "}
              {listaTareas.length > 1
                ? "items left"
                : listaTareas.length === 1
                ? "item left"
                : "tasks, Add a new task!"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
