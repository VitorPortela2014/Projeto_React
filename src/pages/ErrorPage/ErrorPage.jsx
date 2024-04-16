import React from 'react'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
        <h1>Error 404</h1>
        <p>página não encotrada</p>
        <h4><Link to='/'> Voltar para a página</Link></h4>
    </div>
  )
}

export default ErrorPage