import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { unicoMercado } from '../funciones/funciones'


const Mercado = () => {

    const [market, setMarket] = useState(null)
    const params = useParams()
    console.log("Mercado:")
    console.log(market)
    
    
    useEffect(() => {
        unicoMercado(params.market_id, setMarket)
    }, [])

    return(
        <>
        { market != null ? (
            <div>
                <h1> Mercado: {params.market_id} </h1>
                
                    <table>
                        <tr> 
                            <td>Nombre: </td>
                            <td>{market.name}</td>
                        </tr>
                        <tr> 
                            <td>Moneda de cambio:</td>
                            <td>{market.base_currency}</td>
                        </tr>
                        <tr> 
                            <td>Moneda de pago:</td>
                            <td>{market.quote_currency}</td>
                        </tr>
                        <tr> 
                            <td>Tamaño de orden mínimo aceptado:</td> 
                            <td>{market.minimum_order_amount.map(minOrder => (minOrder[0]))}</td>
                        </tr>
                        <tr> 
                            <td>Tarifa pagada por una orden taker:</td>
                            <td>{market.taker_fee}</td>
                        </tr>
                        <tr> 
                            <td>Tarifa pagada por una orden maker:</td>
                            <td>{market.maker_fee}</td>
                        </tr>
                    </table>
                
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