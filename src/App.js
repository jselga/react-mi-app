import React from 'react'
import Button from './Button'
const App = () => {
    const miVariable= true
    if(miVariable){
        return <p>Mi variable dio true</p>
    }
    return (
        <div>
            <h1 onClick={(e) => console.log('click',e)}>
                Hola Mundo
            </h1>
            <Button onClick={() => console.log('clickeado')}>
                Enviar
            </Button>




        </div>
    ) 
}

export default App