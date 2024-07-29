import React from 'react'
import "./Sucesso.css";
import sucesso from "../assets/sucesso.png";

const Home = () => {

    // function tabClose() {
    //     var tab = window.open(window.location,"_top");
    //     tab.close();
    //   }

    return (
        <div id="area-principal">

            <div id='sucesso'>
                <h2>Avaliação enviada com sucesso!</h2><br />
                <img src={sucesso} alt="" width="200px"/>
            </div>

        </div>
    )
}

export default Home