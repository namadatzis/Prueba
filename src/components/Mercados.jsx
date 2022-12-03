import React, { useEffect } from 'react'
import { Mercado } from  '../funciones/funciones'


const Mercados = () => {

    useEffect(() => {
        Mercado()
    },[])

    return(
        <div>

            <header className="App-header">
                <h1>
                    Mercados
                </h1>

            </header>
        </div>
    )
}
export default Mercados