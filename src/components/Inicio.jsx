import React from 'react'

{/* import logo from './logo.svg' */}


const Inicio = () => {
    return(
        <div>

            <header className="App-header">

                {/* <img src={logo} className="App-logo" alt="Logo" /> */}

                <p>
                    Prueba técnica para Nomad por Nicole Madatzis Henríquez
                </p>

                <a
                className="App-link"
                href="https://api.buda.com/#la-api-de-buda-com"
                target="_blank"
                rel="noopener noreferrer"
                >
                Revisar documentación de Buda.com
                </a>

                <a
                className="App-link"
                href="/markets"
                target="_blank"
                rel="noopener noreferrer"
                >
                Revisar mercados
                </a>


            </header>
        </div>
    )
}
export default Inicio
