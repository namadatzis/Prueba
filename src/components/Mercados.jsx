import React, { useEffect, useState } from 'react'
import { todosMercados } from  '../funciones/funciones'


const Mercados = () => {

    const [markets, setMarkets] = useState(null)
    console.log("Markets:")
    console.log(markets)


    useEffect(() => {
        todosMercados(setMarkets)
    },[])

    return(
        <>
        <h1> Mercados disponibles en Buda.com </h1>
        {markets != null ? (
            markets.map(todosMercados => (
                <div key={todosMercados.id} >
                    <a href={`/markets/${todosMercados.id}`} className="App-link">{todosMercados.id}</a>
                </div>
                ))
            ) : ('No hay mercados disponibles')}

        <div>
            <a href={"/"} className="App-link"> Volver al inicio </a>
        </div>
        
        </>
    )
}
export default Mercados