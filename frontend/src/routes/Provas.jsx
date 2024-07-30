import provaFetch from "../axios/config.js";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Provas = () => {
  const [provas, setProvas] = useState(null);

  // Load provas
  useEffect(() => {

    const loadProvas = async () => {
        const res1 = await provaFetch.get("/provas")

        console.log(res1)

        setProvas(res1.data)
    }

    loadProvas()

  }, [])

  if(!provas) return <p>Carregando...</p>

  return (
    <div className="provas">
        <h1>Provas</h1>
        <div>
            {provas.length === 0 && <p>Não há provas cadastradas!</p> }
            {provas.map((prova) => (
                <div key={prova._id}>
                    <h3>{prova.nome}</h3>
                    <h3>{prova.turma}</h3>
                    <h3>{prova.notaPortugues}</h3>
                    <h3>{prova.notaMatematica}</h3>
                </div>
            ))}
        </div>
    </div>
  )
};

export default Provas;
