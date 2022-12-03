import axios from 'axios'


const Mercado = async (state) => {
    
    const endpoint = await axios.get('https://www.buda.com/api/v2/markets')
    console.log(endpoint.data.markets)
    state(endpoint.data.markets)
}

export { Mercado } 