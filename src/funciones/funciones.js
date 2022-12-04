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

export { todosMercados,
    unicoMercado
}

