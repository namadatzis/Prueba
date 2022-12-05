import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unicoMercado } from '../funciones/funciones'


const Mercado = () => {

    const [market, setMarket] = useState(null)
    const params = useParams()
    
    useEffect(() => {
        unicoMercado(params.market_id, setMarket)
    }, [])

    return(
        <>
        { market != null ? (
            <div>
                <h1> Mercado: {params.market_id} </h1>
                <h3> Datos: </h3>
                <li> Nombre: {market.name} </li>
                <li> Moneda de cambio: {market.base_currency} </li>
                <li> Moneda de pago: {market.quote_currency} </li>
                <li> Tamaño de orden mínimo aceptado: {market.minimun_order_amount} </li>
                <li> Tarifa pagada por una orden taker: {market.taker_fee} </li>
                <li> Tarifa pagada por una orden maker: {market.makes_fee} </li>

                <a
                    className="App-link"
                    href="/"
                    rel="noopener noreferrer"
                    >
                    Volver al inicio
                </a>

                <p></p>

                <a
                    className="App-link"
                    href={`/markets/${params.market_id}/trades`}
                    rel="noopener noreferrer"
                    >
                    Ver transacciones
                </a>
            </div>
        ) : ("No hay detalle del mercado seleccionado")}

        </>
    )
}
export default Mercado