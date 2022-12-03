import React, { useEffect, useState } from 'react'
import { Mercado } from  '../funciones/funciones'


const Mercados = () => {

    const [markets, setMarkets] = useState(null)
    
    useEffect(() => {
        Mercado(setMarkets)
    },[])

    return(
        <>
        {markets != null ? (
            markets.map(market => (
                <div key={market.id}>
                    <a href="/markets">{market.id}</a>
                </div>
                ))
            ) : ('No hay mercados disponibles')}
        </>
    )
}
export default Mercados