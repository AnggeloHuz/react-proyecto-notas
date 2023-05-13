import { TarjetaTareas } from "./TarjetaTareas";
import { useContext } from "react";
import {TareaContexto} from '../context/TareaContexto'

export function ListaTareas() {

    const { tareas } = useContext(TareaContexto)

    if (tareas.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas todavia</h1>
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {tareas.map((tarea) => (
                <TarjetaTareas key={tarea.id} tarea={tarea}/>
            ))}
        </div>
    )
}