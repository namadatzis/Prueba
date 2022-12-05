import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { todasTransacciones, mayorTransaccion } from '../funciones/funciones'

const Trades = () => {

    const [trades, setTrades] = useState(null)
    const params = useParams()

    useEffect(() => {
        todasTransacciones(params.market_id, setTrades)
    }, [])

    //Timestamp actual
    const now = new Date()  
    const utcMiliSegundos = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
    const utcSegundos = Math.round(utcMiliSegundos / 1000)  
    const timestamp = utcSegundos - 60 * 60 * 24


    //Obteniendo la fecha desde timestamp
    const verDetalle = (trade) => {
        console.log(typeof(trade))
        const timeTrade = new Date((trade * 60 )/ 1000)
        const tTrade = timeTrade.getFullYear()
        console.log(tTrade)
        console.log(timeTrade)        
        return(timeTrade)
    }

    return(
        <>
        <h1> Trades: {params.market_id}</h1>
        <a
            className="App-link"
            href="/"
            rel="noopener noreferrer"
            >
            Volver al inicio
        </a>
        {trades != null ? (
            <div>
                <table>
                    <tr>
                        <td>Fecha</td>
                        <td>Valor</td>
                        <td>Precio</td>
                        <td>Tipo</td>
                    </tr>
            {trades.entries.map(trade => (
                <tr key={timestamp}>
                    <td>
                        <h2> {trade[0]} </h2>
                    </td>   
                    <td>
                        <h2> {trade[1]} </h2>
                    </td>
                    <td>
                        <h2> {trade[2]} </h2>
                    </td>
                    <td>
                        <h2> {trade[3]} </h2>
                    </td>  
                </tr>
            ))}                
                </table>
            </div>
        ) : (
            <div>
                <h3>
                    No hay transacciones disponibles
                </h3>
            </div>
        )}
        
        </>
    )
}
export default Trades