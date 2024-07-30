import { Link } from "react-router-dom";
import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div id="area-principal">

      <div>
        <h1>Selecione sua série!</h1>
      </div>

      <div id="area-butoes">
        <div>
            <Link to="/prova/new" className="link">1º ANO</Link>
        </div>
        <div>
            <Link to="/prova/new2" className="link">2º ANO</Link>
        </div>
        <div>
            <Link to="/prova/new3" className="link">3º ANO</Link>
        </div>
        {/* <div>
            <Link to="/prova/1ano" className="link">Provas do 1º ano</Link>
        </div>
        <div>
            <Link to="/prova/2ano" className="link">Provas do 2º ano</Link>
        </div> */}
        
      </div>

    </div>
  )
}

export default Home