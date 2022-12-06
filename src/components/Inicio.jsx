import React from 'react'

const Inicio = () => {
    return(
        <div>
            <header className="App-header">
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
                rel="noopener noreferrer"
                >
                Revisar mercados
                </a>
            </header>
        </div>
    )
}
export default Inicio
