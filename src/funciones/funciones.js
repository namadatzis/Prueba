import axios from 'axios'


const Mercado = async () => {
    const peticion = await axios.get('https://www.buda.com/api/v2/markets')
    console.log(peticion)
}

export { Mercado } 