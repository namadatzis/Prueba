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
    const endpoint = await axios.get(`https://www.buda.com/api/v2/markets/${market_id}/trades`)
    const transacciones = await endpoint.data
    state(transacciones.trades)
}

const verTransaccion = async (trades, state) => {
    const trade = await trades
    state(trade.entries)
}

const mayorTransaccion = (trades, state) => {
    const maxTrade = trades.entries[0]
}

export { todosMercados,
    unicoMercado,
    todasTransacciones,
    mayorTransaccion,
    verTransaccion
}

