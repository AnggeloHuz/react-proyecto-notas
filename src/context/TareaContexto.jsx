import { createContext, useState, useEffect  } from "react";
import { tareas } from '../data/tareas'

export const TareaContexto = createContext();

export function TareaContextoProvider(props) {
    const [tarea, setTareas] = useState([])

  useEffect(() => {
    setTareas(tareas)
  }, [])

  function crearTarea(tareaTitulo, tareaDescripcion) {
    setTareas([...tarea, {
      titulo: tareaTitulo,
      id: tarea.length,
      descripcion: tareaDescripcion
    }])
  }

  function eliminarTarea(tareaId) {
    setTareas(tarea.filter( tarea => tarea.id !== tareaId))
  }

    return (
        <TareaContexto.Provider value={{
            tareas: tarea,
            crearTarea: crearTarea,
            eliminarTarea: eliminarTarea
        }}>
            {props.children}
        </TareaContexto.Provider>
    )
}