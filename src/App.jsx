import { ListaTareas } from './components/ListaTareas'
import { FormularioTareas } from './components/FormularioTareas'
import React from 'react'

function App() {

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <FormularioTareas/>
        <ListaTareas/>
      </div>
    </main>
  )
}

export default App
