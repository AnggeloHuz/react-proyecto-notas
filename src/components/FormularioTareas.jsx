import { useState, useContext } from 'react'
import { TareaContexto } from '../context/TareaContexto'

export function FormularioTareas() {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const { crearTarea } = useContext(TareaContexto);

    const enviarDatos = (e) => {
        e.preventDefault();
        crearTarea(titulo, descripcion)

        setTitulo("")
        setDescripcion("")
    }

    return (
        <div className='max-w-md mx-auto'>
            <form className='bg-slate-800 p-10 mb-4 ' onSubmit={enviarDatos}>
                <h1
                className='text-white text-2xl font-bold mb-3'
                >Crea tu Tarea</h1>
                <input
                className='bg-slate-300 p-3 w-full mb-2'
                    type="text"
                    placeholder="Escribe el Titulo de la Tarea"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                    autoFocus />
                <textarea
                    className='bg-slate-300 p-3 w-full mb-2'
                    type="text"
                    placeholder="Escribe la Descripción"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion} />
                <button
                className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400'
                >Guardar</button>
            </form>
        </div>
    )
}