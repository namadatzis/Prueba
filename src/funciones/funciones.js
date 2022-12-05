import axios from 'axios'


const todosMercados = async (state) => {
    const endpoint = await axios.get('https://www.buda.com/api/v2/markets')
    state(endpoint.data.markets)
}

const unicoMercado = async (market_id, state) => {
    const endpoint = await axios.get(`https://www.buda.com/api/v2/markets/${market_id}`)
    const detalleMercado = await endpoint.data
    state(detalleMercado.market)
}

const todasTransacciones = async (market_id, state) => {
    // const now = new Date()  
    // const utcMiliSegundos = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
    // const utcSegundos = Math.round(utcMiliSegundos / 1000)  
    // console.log(`SEGUNDOS:${utcSegundos}`)
    // const timestamp = utcSegundos - 60 * 60 * 24
    const endpoint = await axios.get(`https://www.buda.com/api/v2/markets/${market_id}/trades`)
    const transacciones = await endpoint.data
    state(transacciones.trades)
}

// const verTransaccion = async (trades, state) => {
//     const trade = await trades
//     console.log("verTransaccion")
//     state(trade.entries)
// }

const mayorTransaccion = (trades, state) => {
    console.log("mayorTransaccion")
    console.log(trades)
    const maxTrade = trades.entries[0]
    console.log(maxTrade)
}

export { todosMercados,
    unicoMercado,
    todasTransacciones,
    mayorTransaccion
    // verTransaccion
}

