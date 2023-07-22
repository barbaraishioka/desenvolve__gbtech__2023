//src/componentes/Card/index.tsx

import React from "react"

import './estilos.css'

const Card: React.FC = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card