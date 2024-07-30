import provaFetch from '../axios/config';
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import useToast from "../../hooks/useToast";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import "./Questoes.css";

import { Link } from "react-scroll";

import moment from "moment";


import React from "react";
import q4_img from "../assets/1ano_portugues/q4.jpg"
import q8_parte1 from "../assets/1ano_portugues/q8_parte1.jpg"
import q8_parte2 from "../assets/1ano_portugues/q8_parte2.jpg"
import q17_img from "../assets/1ano_portugues/q17.jpg"

import q22_img from "../assets/1ano_matematica/q22.jpg"
import q24_img from "../assets/1ano_matematica/q24.jpg"
import q26_img from "../assets/1ano_matematica/q26.jpg"
import q27_img from "../assets/1ano_matematica/q27.jpg"
import q28_img from "../assets/1ano_matematica/q28.jpg"
import q29_img from "../assets/1ano_matematica/q29.jpg"
import q30_img from "../assets/1ano_matematica/q30.jpg"
import q31_img from "../assets/1ano_matematica/q31.jpg"
import q32_img from "../assets/1ano_matematica/q32.jpg"
import q33_img from "../assets/1ano_matematica/q33.jpg"
import q33_parte2 from "../assets/1ano_matematica/q33_parte2.jpg"
import q34_img from "../assets/1ano_matematica/q34.jpg"
import q36_img from "../assets/1ano_matematica/q36.jpg"
import q37_img from "../assets/1ano_matematica/q37.jpg"
import q38_img from "../assets/1ano_matematica/q38.jpg"
import q39_a from "../assets/1ano_matematica/q39_a.jpg"
import q39_b from "../assets/1ano_matematica/q39_b.jpg"
import q39_c from "../assets/1ano_matematica/q39_c.jpg"
import q39_d from "../assets/1ano_matematica/q39_d.jpg"
import q40_img from "../assets/1ano_matematica/q40.jpg"
import q40_a from "../assets/1ano_matematica/q40_a.jpg"
import q40_b from "../assets/1ano_matematica/q40_b.jpg"
import q40_c from "../assets/1ano_matematica/q40_c.jpg"
import q40_d from "../assets/1ano_matematica/q40_d.jpg"


const CreateProva = () => {

    const [estiloQ01, setEstiloQ01] = useState("quadrado-questao");
    const [estiloQ02, setEstiloQ02] = useState("quadrado-questao");
    const [estiloQ03, setEstiloQ03] = useState("quadrado-questao");
    const [estiloQ04, setEstiloQ04] = useState("quadrado-questao");
    const [estiloQ05, setEstiloQ05] = useState("quadrado-questao");
    const [estiloQ06, setEstiloQ06] = useState("quadrado-questao");
    const [estiloQ07, setEstiloQ07] = useState("quadrado-questao");
    const [estiloQ08, setEstiloQ08] = useState("quadrado-questao");
    const [estiloQ09, setEstiloQ09] = useState("quadrado-questao");
    const [estiloQ10, setEstiloQ10] = useState("quadrado-questao");

    const [estiloQ11, setEstiloQ11] = useState("quadrado-questao");
    const [estiloQ12, setEstiloQ12] = useState("quadrado-questao");
    const [estiloQ13, setEstiloQ13] = useState("quadrado-questao");
    const [estiloQ14, setEstiloQ14] = useState("quadrado-questao");
    const [estiloQ15, setEstiloQ15] = useState("quadrado-questao");
    const [estiloQ16, setEstiloQ16] = useState("quadrado-questao");
    const [estiloQ17, setEstiloQ17] = useState("quadrado-questao");
    const [estiloQ18, setEstiloQ18] = useState("quadrado-questao");
    const [estiloQ19, setEstiloQ19] = useState("quadrado-questao");
    const [estiloQ20, setEstiloQ20] = useState("quadrado-questao");

    const [estiloQ21, setEstiloQ21] = useState("quadrado-questao");
    const [estiloQ22, setEstiloQ22] = useState("quadrado-questao");
    const [estiloQ23, setEstiloQ23] = useState("quadrado-questao");
    const [estiloQ24, setEstiloQ24] = useState("quadrado-questao");
    const [estiloQ25, setEstiloQ25] = useState("quadrado-questao");
    const [estiloQ26, setEstiloQ26] = useState("quadrado-questao");
    const [estiloQ27, setEstiloQ27] = useState("quadrado-questao");
    const [estiloQ28, setEstiloQ28] = useState("quadrado-questao");
    const [estiloQ29, setEstiloQ29] = useState("quadrado-questao");
    const [estiloQ30, setEstiloQ30] = useState("quadrado-questao");

    const [estiloQ31, setEstiloQ31] = useState("quadrado-questao");
    const [estiloQ32, setEstiloQ32] = useState("quadrado-questao");
    const [estiloQ33, setEstiloQ33] = useState("quadrado-questao");
    const [estiloQ34, setEstiloQ34] = useState("quadrado-questao");
    const [estiloQ35, setEstiloQ35] = useState("quadrado-questao");
    const [estiloQ36, setEstiloQ36] = useState("quadrado-questao");
    const [estiloQ37, setEstiloQ37] = useState("quadrado-questao");
    const [estiloQ38, setEstiloQ38] = useState("quadrado-questao");
    const [estiloQ39, setEstiloQ39] = useState("quadrado-questao");
    const [estiloQ40, setEstiloQ40] = useState("quadrado-questao");

    const [nome, setNome] = useState("")

    const [turma, setTurma] = useState("")

    const [serie, setSerie] = useState("")

    const [notaPortugues, setNotaPortugues] = useState(0)

    const [notaMatematica, setNotaMatematica] = useState(0)

    const [discQ1, setDiscQ1] = useState("")
    const [q1, setQ1] = useState("")
    const [gq1, setGq1] = useState("")
    const [dq1, setDq1] = useState("")

    const [discQ2, setDiscQ2] = useState("")
    const [q2, setQ2] = useState("")
    const [gq2, setGq2] = useState("")
    const [dq2, setDq2] = useState("")

    const [discQ3, setDiscQ3] = useState("")
    const [q3, setQ3] = useState("")
    const [gq3, setGq3] = useState("")
    const [dq3, setDq3] = useState("")

    const [discQ4, setDiscQ4] = useState("")
    const [q4, setQ4] = useState("")
    const [gq4, setGq4] = useState("")
    const [dq4, setDq4] = useState("")

    const [discQ5, setDiscQ5] = useState("")
    const [q5, setQ5] = useState("")
    const [gq5, setGq5] = useState("")
    const [dq5, setDq5] = useState("")

    const [discQ6, setDiscQ6] = useState("")
    const [q6, setQ6] = useState("")
    const [gq6, setGq6] = useState("")
    const [dq6, setDq6] = useState("")

    const [discQ7, setDiscQ7] = useState("")
    const [q7, setQ7] = useState("")
    const [gq7, setGq7] = useState("")
    const [dq7, setDq7] = useState("")

    const [discQ8, setDiscQ8] = useState("")
    const [q8, setQ8] = useState("")
    const [gq8, setGq8] = useState("")
    const [dq8, setDq8] = useState("")

    const [discQ9, setDiscQ9] = useState("")
    const [q9, setQ9] = useState("")
    const [gq9, setGq9] = useState("")
    const [dq9, setDq9] = useState("")

    const [discQ10, setDiscQ10] = useState("")
    const [q10, setQ10] = useState("")
    const [gq10, setGq10] = useState("")
    const [dq10, setDq10] = useState("")

    const [discQ11, setDiscQ11] = useState("")
    const [q11, setQ11] = useState("")
    const [gq11, setGq11] = useState("")
    const [dq11, setDq11] = useState("")

    const [discQ12, setDiscQ12] = useState("")
    const [q12, setQ12] = useState("")
    const [gq12, setGq12] = useState("")
    const [dq12, setDq12] = useState("")

    const [discQ13, setDiscQ13] = useState("")
    const [q13, setQ13] = useState("")
    const [gq13, setGq13] = useState("")
    const [dq13, setDq13] = useState("")

    const [discQ14, setDiscQ14] = useState("")
    const [q14, setQ14] = useState("")
    const [gq14, setGq14] = useState("")
    const [dq14, setDq14] = useState("")

    const [discQ15, setDiscQ15] = useState("")
    const [q15, setQ15] = useState("")
    const [gq15, setGq15] = useState("")
    const [dq15, setDq15] = useState("")

    const [discQ16, setDiscQ16] = useState("")
    const [q16, setQ16] = useState("")
    const [gq16, setGq16] = useState("")
    const [dq16, setDq16] = useState("")

    const [discQ17, setDiscQ17] = useState("")
    const [q17, setQ17] = useState("")
    const [gq17, setGq17] = useState("")
    const [dq17, setDq17] = useState("")

    const [discQ18, setDiscQ18] = useState("")
    const [q18, setQ18] = useState("")
    const [gq18, setGq18] = useState("")
    const [dq18, setDq18] = useState("")

    const [discQ19, setDiscQ19] = useState("")
    const [q19, setQ19] = useState("")
    const [gq19, setGq19] = useState("")
    const [dq19, setDq19] = useState("")

    const [discQ20, setDiscQ20] = useState("")
    const [q20, setQ20] = useState("")
    const [gq20, setGq20] = useState("")
    const [dq20, setDq20] = useState("")

    const [discQ21, setDiscQ21] = useState("")
    const [q21, setQ21] = useState("")
    const [gq21, setGq21] = useState("")
    const [dq21, setDq21] = useState("")

    const [discQ22, setDiscQ22] = useState("")
    const [q22, setQ22] = useState("")
    const [gq22, setGq22] = useState("")
    const [dq22, setDq22] = useState("")

    const [discQ23, setDiscQ23] = useState("")
    const [q23, setQ23] = useState("")
    const [gq23, setGq23] = useState("")
    const [dq23, setDq23] = useState("")

    const [discQ24, setDiscQ24] = useState("")
    const [q24, setQ24] = useState("")
    const [gq24, setGq24] = useState("")
    const [dq24, setDq24] = useState("")

    const [discQ25, setDiscQ25] = useState("")
    const [q25, setQ25] = useState("")
    const [gq25, setGq25] = useState("")
    const [dq25, setDq25] = useState("")

    const [discQ26, setDiscQ26] = useState("")
    const [q26, setQ26] = useState("")
    const [gq26, setGq26] = useState("")
    const [dq26, setDq26] = useState("")

    const [discQ27, setDiscQ27] = useState("")
    const [q27, setQ27] = useState("")
    const [gq27, setGq27] = useState("")
    const [dq27, setDq27] = useState("")

    const [discQ28, setDiscQ28] = useState("")
    const [q28, setQ28] = useState("")
    const [gq28, setGq28] = useState("")
    const [dq28, setDq28] = useState("")

    const [discQ29, setDiscQ29] = useState("")
    const [q29, setQ29] = useState("")
    const [gq29, setGq29] = useState("")
    const [dq29, setDq29] = useState("")

    const [discQ30, setDiscQ30] = useState("")
    const [q30, setQ30] = useState("")
    const [gq30, setGq30] = useState("")
    const [dq30, setDq30] = useState("")

    const [discQ31, setDiscQ31] = useState("")
    const [q31, setQ31] = useState("")
    const [gq31, setGq31] = useState("")
    const [dq31, setDq31] = useState("")

    const [discQ32, setDiscQ32] = useState("")
    const [q32, setQ32] = useState("")
    const [gq32, setGq32] = useState("")
    const [dq32, setDq32] = useState("")

    const [discQ33, setDiscQ33] = useState("")
    const [q33, setQ33] = useState("")
    const [gq33, setGq33] = useState("")
    const [dq33, setDq33] = useState("")

    const [discQ34, setDiscQ34] = useState("")
    const [q34, setQ34] = useState("")
    const [gq34, setGq34] = useState("")
    const [dq34, setDq34] = useState("")

    const [discQ35, setDiscQ35] = useState("")
    const [q35, setQ35] = useState("")
    const [gq35, setGq35] = useState("")
    const [dq35, setDq35] = useState("")

    const [discQ36, setDiscQ36] = useState("")
    const [q36, setQ36] = useState("")
    const [gq36, setGq36] = useState("")
    const [dq36, setDq36] = useState("")

    const [discQ37, setDiscQ37] = useState("")
    const [q37, setQ37] = useState("")
    const [gq37, setGq37] = useState("")
    const [dq37, setDq37] = useState("")

    const [discQ38, setDiscQ38] = useState("")
    const [q38, setQ38] = useState("")
    const [gq38, setGq38] = useState("")
    const [dq38, setDq38] = useState("")

    const [discQ39, setDiscQ39] = useState("")
    const [q39, setQ39] = useState("")
    const [gq39, setGq39] = useState("")
    const [dq39, setDq39] = useState("")

    const [discQ40, setDiscQ40] = useState("")
    const [q40, setQ40] = useState("")
    const [gq40, setGq40] = useState("")
    const [dq40, setDq40] = useState("")


    const navigate = useNavigate()


    // Create a new prova
    const createProva = async (e) => {
        e.preventDefault()


        var data_hora = moment.utc().format()
        var local = moment.utc(data_hora).local().format();



        var contadorP = 0, contadorM = 0


        function contadorPortugues() {

            if (q1 == "B") {
                contadorP = contadorP + 0.5
            }

            if (q2 == "D") {
                contadorP = contadorP + 0.5
            }

            if (q3 == "A") {
                contadorP = contadorP + 0.5
            }

            if (q4 == "C") {
                contadorP = contadorP + 0.5
            }

            if (q5 == "D") {
                contadorP = contadorP + 0.5
            }

            if (q6 == "E") {
                contadorP = contadorP + 0.5
            }

            if (q7 == "C") {
                contadorP = contadorP + 0.5
            }

            if (q8 == "E") {
                contadorP = contadorP + 0.5
            }

            if (q9 == "D") {
                contadorP = contadorP + 0.5
            }

            if (q10 == "B") {
                contadorP = contadorP + 0.5
            }

            if (q11 == "E") {
                contadorP = contadorP + 0.5
            }

            if (q12 == "B") {
                contadorP = contadorP + 0.5
            }

            if (q13 == "C") {
                contadorP = contadorP + 0.5
            }

            if (q14 == "A") {
                contadorP = contadorP + 0.5
            }

            if (q15 == "B") {
                contadorP = contadorP + 0.5
            }

            if (q16 == "A") {
                contadorP = contadorP + 0.5
            }

            if (q17 == "C") {
                contadorP = contadorP + 0.5
            }

            if (q18 == "B") {
                contadorP = contadorP + 0.5
            }

            if (q19 == "E") {
                contadorP = contadorP + 0.5
            }

            if (q20 == "B") {
                contadorP = contadorP + 0.5
            }





            if (q21 == "D") {
                contadorM = contadorM + 0.5
            }

            if (q22 == "B") {
                contadorM = contadorM + 0.5
            }

            if (q23 == "D") {
                contadorM = contadorM + 0.5
            }

            if (q24 == "A") {
                contadorM = contadorM + 0.5
            }

            if (q25 == "B") {
                contadorM = contadorM + 0.5
            }

            if (q26 == "B") {
                contadorM = contadorM + 0.5
            }

            if (q27 == "E") {
                contadorM = contadorM + 0.5
            }

            if (q28 == "E") {
                contadorM = contadorM + 0.5
            }

            if (q29 == "E") {
                contadorM = contadorM + 0.5
            }

            if (q30 == "D") {
                contadorM = contadorM + 0.5
            }

            if (q31 == "C") {
                contadorM = contadorM + 0.5
            }

            if (q32 == "A") {
                contadorM = contadorM + 0.5
            }

            if (q33 == "B") {
                contadorM = contadorM + 0.5
            }

            if (q34 == "D") {
                contadorM = contadorM + 0.5
            }

            if (q35 == "A") {
                contadorM = contadorM + 0.5
            }

            if (q36 == "A") {
                contadorM = contadorM + 0.5
            }

            if (q37 == "C") {
                contadorM = contadorM + 0.5
            }

            if (q38 == "A") {
                contadorM = contadorM + 0.5
            }

            if (q39 == "C") {
                contadorM = contadorM + 0.5
            }

            if (q40 == "A") {
                contadorM = contadorM + 0.5
            }


        }

        contadorPortugues()

        const prova = {
            nome,
            turma,
            serie: "1º ANO",
            notaPortugues: contadorP,
            notaMatematica: contadorM,
            entrega: local,


            discQ1: "P",
            q1,
            gq1: "B",
            dq1: "D14",

            discQ2: "P",
            q2,
            gq2: "D",
            dq2: "D10",
            discQ3: "P",
            q3,
            gq3: "A",
            dq3: "D27",
            discQ4: "P",
            q4,
            gq4: "C",
            dq4: "D13",
            discQ5: "P",
            q5,
            gq5: "D",
            dq5: "D17",
            discQ6: "P",
            q6,
            gq6: "E",
            dq6: "D21",
            discQ7: "P",
            q7,
            gq7: "C",
            dq7: "D25",
            discQ8: "P",
            q8,
            gq8: "E",
            dq8: "D11",
            discQ9: "P",
            q9,
            gq9: "D",
            dq9: "D16",
            discQ10: "P",
            q10,
            gq10: "B",
            dq10: "D22",
            discQ11: "P",
            q11,
            gq11: "E",
            dq11: "D11",
            discQ12: "P",
            q12,
            gq12: "B",
            dq12: "D19",
            discQ13: "P",
            q13,
            gq13: "C",
            dq13: "D18",
            discQ14: "P",
            q14,
            gq14: "A",
            dq14: "D24",
            discQ15: "P",
            q15,
            gq15: "B",
            dq15: "D26",
            discQ16: "P",
            q16,
            gq16: "A",
            dq16: "D23",
            discQ17: "P",
            q17,
            gq17: "C",
            dq17: "D12",
            discQ18: "P",
            q18,
            gq18: "B",
            dq18: "D09",
            discQ19: "P",
            q19,
            gq19: "E",
            dq19: "D08",
            discQ20: "P",
            q20,
            gq20: "B",
            dq20: "D06",





            discQ21: "M",
            q21,
            gq21: "D",
            dq21: "D13",
            discQ22: "M",
            q22,
            gq22: "B",
            dq22: "D23",
            discQ23: "M",
            q23,
            gq23: "D",
            dq23: "D19",
            discQ24: "M",
            q24,
            gq24: "A",
            dq24: "D20",
            discQ25: "M",
            q25,
            gq25: "B",
            dq25: "D19",
            discQ26: "M",
            q26,
            gq26: "B",
            dq26: "D12",
            discQ27: "M",
            q27,
            gq27: "E",
            dq27: "D20",
            discQ28: "M",
            q28,
            gq28: "E",
            dq28: "D14",
            discQ29: "M",
            q29,
            gq29: "E",
            dq29: "D20",
            discQ30: "M",
            q30,
            gq30: "D",
            dq30: "D05",
            discQ31: "M",
            q31,
            gq31: "C",
            dq31: "D15",
            discQ32: "M",
            q32,
            gq32: "A",
            dq32: "D17",
            discQ33: "M",
            q33,
            gq33: "B",
            dq33: "D02",
            discQ34: "M",
            q34,
            gq34: "D",
            dq34: "D06",
            discQ35: "M",
            q35,
            gq35: "A",
            dq35: "D16",
            discQ36: "M",
            q36,
            gq36: "A",
            dq36: "D11",
            discQ37: "M",
            q37,
            gq37: "C",
            dq37: "D33",
            discQ38: "M",
            q38,
            gq38: "A",
            dq38: "D24",
            discQ39: "M",
            q39,
            gq39: "C",
            dq39: "D20",
            discQ40: "M",
            q40,
            gq40: "A",
            dq40: "D03",
        }

        const res = await provaFetch.post("/provas", prova)

        if (res.status === 201) {
            navigate("/sucesso")
        }

    }


    return (
        <div className='prova'>
            <Accordion className='Accordion' defaultActiveKey="">
                <Accordion.Item eventKey="0">
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body>

                        <div className="questoes">
                            <Link to="q1" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ01} >01</Link>
                            <Link to="q2" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ02} >02</Link>
                            <Link to="q3" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ03} >03</Link>
                            <Link to="q4" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ04} >04</Link>
                            <Link to="q5" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ05} >05</Link>
                            <Link to="q6" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ06} >06</Link>
                            <Link to="q7" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ07} >07</Link>
                            <Link to="q8" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ08} >08</Link>
                            <Link to="q9" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ09} >09</Link>
                            <Link to="q10" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ10} >10</Link> <br />
                            <Link to="q11" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ11} >11</Link>
                            <Link to="q12" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ12} >12</Link>
                            <Link to="q13" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ13} >13</Link>
                            <Link to="q14" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ14} >14</Link>
                            <Link to="q15" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ15} >15</Link>
                            <Link to="q16" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ16} >16</Link>
                            <Link to="q17" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ17} >17</Link>
                            <Link to="q18" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ18} >18</Link>
                            <Link to="q19" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ19} >19</Link>
                            <Link to="q20" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ20} >20</Link> <br />
                            <Link to="q21" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ21} >21</Link>
                            <Link to="q22" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ22} >22</Link>
                            <Link to="q23" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ23} >23</Link>
                            <Link to="q24" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ24} >24</Link>
                            <Link to="q25" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ25} >25</Link>
                            <Link to="q26" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ26} >26</Link>
                            <Link to="q27" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ27} >27</Link>
                            <Link to="q28" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ28} >28</Link>
                            <Link to="q29" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ29} >29</Link>
                            <Link to="q30" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ30} >30</Link> <br />
                            <Link to="q31" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ31} >31</Link>
                            <Link to="q32" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ32} >32</Link>
                            <Link to="q33" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ33} >33</Link>
                            <Link to="q34" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ34} >34</Link>
                            <Link to="q35" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ35} >35</Link>
                            <Link to="q36" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ36} >36</Link>
                            <Link to="q37" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ37} >37</Link>
                            <Link to="q38" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ38} >38</Link>
                            <Link to="q39" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ39} >39</Link>
                            <Link to="q40" spy={true} smooth={false} offset={-100} duration={500} className={estiloQ40} >40</Link> <br />
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> <br />



            <h2>1º ANO</h2>
            <p className="subtitle">20 questões de Português e 20 questões de Matemática.</p>

            <form onSubmit={(e) => createProva(e)}>

                <label>Turma</label>
                <select required onChange={(e) => setTurma(e.target.value)} value={turma} >
                    <option value=""></option>
                    <option value="1º A - ADM">1º A - ADM</option>
                    <option value="1º B - ADM">1º B - ADM</option>
                    <option value="1º A - DS">1º A - DS</option>
                    <option value="1º B - DS">1º B - DS</option>
                </select>

                <label>Estudante</label>
                <input
                    type="text"
                    placeholder="Sem abreviações..."
                    required onChange={(e) => setNome(e.target.value.toUpperCase())} value={nome}
                />
                <br />


                {/* ================================================ */}

                <h2 className='title'>Questões de Português</h2>
                <hr />

                <div>

                    {/* =========================================================== */}
                    <div id="q1" className="questao">

                        <h3>Questão 1</h3>

                        <p className='descritor'>Descritor: D14 - Reconhecer posicionamentos em um ou mais textos que tratam do mesmo tema.</p>

                        <p className='texto'>Leia os textos abaixo:</p> <br />

                        <p> <b> <i>Texto 1 </i> </b> </p> <br />

                        <p> <b>Piscina natural no Morro do Moreno vira atração no ES </b></p>
                        <p> <i>Local tem sido descoberto por moradores da Grande Vitória no calor.</i></p>
                        <p className='texto'>A piscina de águas naturais da Ponta do Farol, no Morro do Moreno, em Vila Velha, virou atração durante o calor no Espírito Santo. O local, antes pouco visitado, foi divulgado em uma página que mostra os pontos turísticos do estado nas redes sociais. Depois da publicação, a piscina tem recebido visitantes de toda a Grande Vitória.</p>
                        <p className='texto'>Nem mesmo os moradores de Vila Velha e frequentadores antigos da formação de pedra que cerca o local conheciam o pequeno recanto. É o caso do administrador Deverson Daltio, que costuma passear de bicicleta e fazer caminhadas com a amiga Joseane de Carvalho bem pertinho da piscina.</p>
                        <p className='texto'>“A gente sempre passou por aqui, mas não sabia da piscina. Vimos que é um lugar maravilhoso para relaxar, fazer fotos, então viemos descobrir. Estamos adorando”, disse Deverson.As estudantes Eduarda Furtado e Juliana Moreira saíram de Vitória para ir até a piscina. As duas também já conheciam o Farol de Santa Luzia e o Morro do Moreno, mas a piscina natural foi uma surpresa.</p>
                        <p className='texto'>Enquanto a maré estiver alta, o local pode ser curtido para banhos. A água cristalina e a vista para a Terceira Ponte fizeram sucesso entre os moradores e turistas. [...]</p>
                        <p className='fonte'>Disponível em: http://g1.globo.com/espirito-santo/noticia/2015/12/piscina-natural-no-morro-do-moreno-vira-atracao-no-es. html. Acesso em: 12 jan. 2016. Fragmento.</p>
                        <br />
                        <p> <b> <i>Texto 2 </i> </b> </p> <br />
                        <p> <b>Ecoturismo na Rota do Caparaó é a dica para o fim de semana no Espírito Santo</b></p>
                        <p className='texto'>O fim de semana se aproxima e a Secretaria de Estado de Turismo (Setur) indica o Parque Nacional do Caparaó, que abriga o Pico da Bandeira, como opção para os adeptos do ecoturismo.</p>
                        <p className='texto'>O Pico da Bandeira é o terceiro ponto mais alto do país, com 2 890 metros de altitude. O parque que abriga o pico situa-se na divisa entre o Espírito Santo e Minas Gerais e tem 70% de sua extensão em território capixaba. A entrada principal do parque localiza-se no município de Dores do Rio Preto, ao Sul do Espírito Santo.</p>
                        <p className='texto'>O relevo favorece a formação de quedas d’água, sendo as mais conhecidas a Cachoeira Bonita, com 80 metros de altura, e o Vale Verde, famoso por belas piscinas naturais. A fauna e a flora são riquíssimas e podem ser observadas nos trekkings realizados com a companhia de um guia. [...]</p>
                        <p className='texto'>O clima no parque é frio e em alguns meses do ano as temperaturas chegam a ser negativas. O Caparaó é um dos cenários de ecoturismo mais visitados do país e seu grande fluxo de visitantes é responsável por movimentar a região em seu entorno.</p>
                        <p className='fonte'>Disponível em: http://ruralcentro.uol.com.br/noticias/ecoturismo-na-rota-do-caparao-e-a-dica-para-o-fim-de-semana-no-espirito-santo-38145#y=563. Acesso em: 15 jan. 2016. Fragmento.</p>
                        <br />
                        <p className='quesito'>01) Esses textos têm em comum o fato de</p>

                        <input type="radio" name="q1" id="" value="A" required onClick={(e) => { setDiscQ1("P"), setEstiloQ01("quadrado-questao-verde"), setQ1(e.target.value), setGq1("B"), setDq1("D14") }} />
                        <p className='opcao'>apresentarem parques ecológicos naturais.</p>
                        <input type="radio" name="q1" id="" value="B" onClick={(e) => { setDiscQ1("P"), setEstiloQ01("quadrado-questao-verde"), setQ1(e.target.value), setGq1("B"), setDq1("D14") }} />
                        <p className='opcao'>apresentarem parques ecológicos naturais.</p>
                        <input type="radio" name="q1" id="" value="C" onClick={(e) => { setDiscQ1("P"), setEstiloQ01("quadrado-questao-verde"), setQ1(e.target.value), setGq1("B"), setDq1("D14") }} />
                        <p className='opcao'>apresentarem parques ecológicos naturais.</p>
                        <input type="radio" name="q1" id="" value="D" onClick={(e) => { setDiscQ1("P"), setEstiloQ01("quadrado-questao-verde"), setQ1(e.target.value), setGq1("B"), setDq1("D14") }} />
                        <p className='opcao'>apresentarem parques ecológicos naturais.</p>
                        <input type="radio" name="q1" id="" value="E" onClick={(e) => { setDiscQ1("P"), setEstiloQ01("quadrado-questao-verde"), setQ1(e.target.value), setGq1("B"), setDq1("D14") }} />
                        <p className='opcao'>apresentarem parques ecológicos naturais.</p>
                    </div>
                    {/* =========================================================== */}

                    {/* =========================================================== */}
                    <div id="q2" className="questao">
                        <h3>Questão 2</h3>
                        <p className='descritor'>Descritor: D10 - Distinguir um fato de uma opinião.</p>
                        <p className='texto'>Leia novamente o texto “Piscina natural no Morro do Moreno vira atração no ES” para responder às questões abaixo.</p>
                        <br />
                        <p className='quesito'>02)O trecho do Texto 1 que apresenta uma opinião é:</p>

                        <input type="radio" name="q2" id="" value="A" required onClick={(e) => { setDiscQ2("P"), setEstiloQ02("quadrado-questao-verde"), setQ2(e.target.value), setGq2("D"), setDq2("D10") }} />
                        <p className='opcao'>“A piscina de águas naturais da Ponta do Farol, [...] em Vila Velha, virou atração...”.</p>

                        <input type="radio" name="q2" id="" value="B" onClick={(e) => { setDiscQ2("P"), setEstiloQ02("quadrado-questao-verde"), setQ2(e.target.value), setGq2("D"), setDq2("D10") }} />
                        <p className='opcao'>“Depois da publicação, a piscina tem recebido visitantes de toda a Grande Vitória.”.</p>

                        <input type="radio" name="q2" id="" value="C" onClick={(e) => { setDiscQ2("P"), setEstiloQ02("quadrado-questao-verde"), setQ2(e.target.value), setGq2("D"), setDq2("D10") }} />
                        <p className='opcao'>“‘A gente sempre passou por aqui, mas não sabia da piscina’.”</p>

                        <input type="radio" name="q2" id="" value="D" onClick={(e) => { setDiscQ2("P"), setEstiloQ02("quadrado-questao-verde"), setQ2(e.target.value), setGq2("D"), setDq2("D10") }} />
                        <p className='opcao'>“‘Vimos que é um lugar maravilhoso para relaxar, fazer fotos,...’”.</p>

                        <input type="radio" name="q2" id="" value="E" onClick={(e) => { setDiscQ2("P"), setEstiloQ02("quadrado-questao-verde"), setQ2(e.target.value), setGq2("D"), setDq2("D10") }} />
                        <p className='opcao'>“As estudantes Eduarda Furtado e Juliana Moreira saíram de Vitória para ir até a piscina.”.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q3" className="questao">
                        <h3>Questão 3</h3>
                        <p className='descritor'>Descritor: D27 - Diferenciar as partes principais das secundárias em um texto.</p>
                        <br />
                        <p className='quesito'>03) A informação principal do Texto 1 está no trecho:</p>

                        <input type="radio" name="q3" id="" value="A" required onClick={(e) => { setDiscQ3("P"), setEstiloQ03("quadrado-questao-verde"), setQ3(e.target.value), setGq3("A"), setDq3("D27") }} />
                        <p className='opcao'>“A piscina de águas naturais da Ponta do Farol, no Morro do Moreno, em Vila Velha, virou atração...”.</p>

                        <input type="radio" name="q3" id="" value="B" onClick={(e) => { setDiscQ3("P"), setEstiloQ03("quadrado-questao-verde"), setQ3(e.target.value), setGq3("A"), setDq3("D27") }} />
                        <p className='opcao'>“Nem mesmo os moradores de Vila Velha e frequentadores antigos [...] conheciam o pequeno recanto.”.</p>

                        <input type="radio" name="q3" id="" value="C" onClick={(e) => { setDiscQ3("P"), setEstiloQ03("quadrado-questao-verde"), setQ3(e.target.value), setGq3("A"), setDq3("D27") }} />
                        <p className='opcao'>“É o caso do administrador Deverson Daltio, que costuma passear de bicicleta...”.</p>

                        <input type="radio" name="q3" id="" value="D" onClick={(e) => { setDiscQ3("P"), setEstiloQ03("quadrado-questao-verde"), setQ3(e.target.value), setGq3("A"), setDq3("D27") }} />
                        <p className='opcao'>“As estudantes Eduarda Furtado e Juliana Moreira saíram de Vitória para ir até a piscina.”.</p>

                        <input type="radio" name="q3" id="" value="E" onClick={(e) => { setDiscQ3("P"), setEstiloQ03("quadrado-questao-verde"), setQ3(e.target.value), setGq3("A"), setDq3("D27") }} />
                        <p className='opcao'>“Enquanto a maré estiver alta, o local pode ser curtido para banhos.”.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q4" className="questao">
                        <h3>Questão 4</h3>
                        <p className='descritor'>Descritor: D13 - Identificar a finalidade de textos de diferentes gêneros.</p>
                        <p className='texto'>Leia o texto abaixo:</p> <br />
                        <br />

                        <img src={q4_img} alt="" width="100%" />

                        <p className='quesito'>04) O objetivo comunicativo desse texto é</p>

                        <input type="radio" name="q4" id="" value="A" required onClick={(e) => { setEstiloQ04("quadrado-questao-verde"), setQ4(e.target.value)}} />
                        <p className='opcao'>anunciar um produto.</p>

                        <input type="radio" name="q4" id="" value="B" onClick={(e) => { setEstiloQ04("quadrado-questao-verde"), setQ4(e.target.value)}} />
                        <p className='opcao'>dar uma orientação.</p>

                        <input type="radio" name="q4" id="" value="C" onClick={(e) => { setEstiloQ04("quadrado-questao-verde"), setQ4(e.target.value)}} />
                        <p className='opcao'>divulgar uma campanha.</p>

                        <input type="radio" name="q4" id="" value="D" onClick={(e) => { setEstiloQ04("quadrado-questao-verde"), setQ4(e.target.value)}} />
                        <p className='opcao'>ensinar um procedimento.</p>

                        <input type="radio" name="q4" id="" value="E" onClick={(e) => { setEstiloQ04("quadrado-questao-verde"), setQ4(e.target.value)}} />
                        <p className='opcao'>fazer um convite.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q5" className="questao">
                        <h3>Questão 5</h3>
                        <p className='descritor'>Descritor: D17 - Estabelecer relações lógico-discursivas presentes no texto, marcadas pelo uso de elementos linguísticos.</p>
                        <p className='texto'>Leia novamente o texto “Doe... sonhos” para respoder à questão abaixo.</p> <br />

                        <p className='quesito'>05) Nesse texto, no trecho “<u>Se</u> você tem brinquedos...”, o termo em destaque expressa uma relação de</p>

                        <input type="radio" name="q5" id="" value="A" required onClick={(e) => { setEstiloQ05("quadrado-questao-verde"), setQ5(e.target.value)}} />
                        <p className='opcao'>adição.</p>

                        <input type="radio" name="q5" id="" value="B" onClick={(e) => { setEstiloQ05("quadrado-questao-verde"), setQ5(e.target.value)}} />
                        <p className='opcao'>causa.</p>

                        <input type="radio" name="q5" id="" value="C" onClick={(e) => { setEstiloQ05("quadrado-questao-verde"), setQ5(e.target.value)}} />
                        <p className='opcao'>conclusão.</p>

                        <input type="radio" name="q5" id="" value="D" onClick={(e) => { setEstiloQ05("quadrado-questao-verde"), setQ5(e.target.value)}} />
                        <p className='opcao'>condição.</p>

                        <input type="radio" name="q5" id="" value="E" onClick={(e) => { setEstiloQ05("quadrado-questao-verde"), setQ5(e.target.value)}} />
                        <p className='opcao'>oposição.</p>
                    </div>
                    {/* =========================================================== */}


                    <div id="q6" className="questao">
                        <h3>Questão 6</h3>
                        <p className='descritor'>Descritor D21: Reconhecer o conflito gerador do enredo e os elementos de uma narrativa.</p>
                        <p className='texto'>Leia o texto abaixo:</p> <br />

                        <p> <b>Cardápio existencial</b></p>

                        <p className='texto'>– E se a vida for como um cardápio?</p>

                        <p className='texto'>A pergunta pegou Rosinha de surpresa. Ela levantou os olhos do menu e se deparou com o marido em estado reflexivo.</p>

                        <p className='texto'>– Ora, Alfredo, deixe de filosofar e escolha logo o seu prato.</p>

                        <p className='texto'>Os dois haviam saído para jantar e estavam na varanda do Bar Lagoa, de onde se pode ver um cantinho de céu e o Redentor.</p>

                        <p className='texto'>– Rosinha, pense nas consequências do que estou dizendo. Se a vida for como um cardápio, nós talvez estejamos escolhendo errado. No lugar da buchada de bode em que nossas vidas se transformaram, poderíamos nos deliciar com escargots. Experimentar sabores novos, mais sofisticados...</p>

                        <p className='texto'>– Por que a vida seria como um cardápio, Alfredo? Tenha dó.</p>

                        <p className='texto'>– E por que não seria? Ninguém sabe de fato o que é a vida, portanto qualquer acepção é válida, até prova em contrário.</p>

                        <p className='texto'>– Benhê, acorda. Ninguém vai aparecer para servir o seu cardápio imaginário. Na vida, a gente tem que ir buscar. A vida é mais parecida com um restaurante a quilo, self-service, entende?</p>

                        <p className='texto'>– Boa imagem. Concordo com o restaurante a quilo. É assim para quase todo mundo. Mas quando evoluímos um pouco, chega a hora em que podemos nos servir a la carte. Rosinha, nós estamos nesse nível. Podemos fazer opções mais ousadas.</p>

                        <p className='texto'>– Alfredo, se você está querendo aventuras, variar o arroz com feijão, seja claro. Não me venha com essa conversa de cardápio existencial. Além disso, se a nossa vida virou uma buchada de bode, com quem você pensa experimentar essa coisa gosmenta, o tal escargot?</p>

                        <p className='texto'>– Querida, não reduza minhas ideias a uma trivial variação gastronômica. Minha hipótese, caso correta, tem implicações metafísicas. Se a vida for como um cardápio, do outro lado
                            teria que existir o Grand Chef, o criador do menu.</p>

                        <p className='texto'>– Alfredo, fofo, agora você viajou na maionese.</p>

                        <p className='fonte'>FARIAS, Antônio Carlos de. Disponível em: http://www1.folha.uol.com.br/folha/pensata/ult686u141.shtml. Acesso em: 9 mar. 2014.Fragmento. (P120131G5_SUP)</p>

                        <br />

                        <p className='quesito'>06) O enredo dessa história desenvolveu-se a partir</p>

                        <input type="radio" name="q6" id="" value="A" required onClick={(e) => { setEstiloQ06("quadrado-questao-verde"), setQ6(e.target.value)}} />
                        <p className='opcao'>da comparação com os dois pratos feita pelo marido.</p>
                        <input type="radio" name="q6" id="" value="B" onClick={(e) => { setEstiloQ06("quadrado-questao-verde"), setQ6(e.target.value)}} />
                        <p className='opcao'>da proposta do marido sobre opções mais ousadas.</p>
                        <input type="radio" name="q6" id="" value="C" onClick={(e) => { setEstiloQ06("quadrado-questao-verde"), setQ6(e.target.value)}} />
                        <p className='opcao'>da saída do casal para jantar na varanda do Bar Lagoa.</p>
                        <input type="radio" name="q6" id="" value="D" onClick={(e) => { setEstiloQ06("quadrado-questao-verde"), setQ6(e.target.value)}} />
                        <p className='opcao'>do momento que Rosinha diz que o marido viajou na maionese.</p>
                        <input type="radio" name="q6" id="" value="E" onClick={(e) => { setEstiloQ06("quadrado-questao-verde"), setQ6(e.target.value)}} />
                        <p className='opcao'>do questionamento do marido sobre a filosofia da vida.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q7" className="questao">
                        <h3>Questão 7</h3>
                        <p className='descritor'>Descritor D25: Reconhecer o efeito de sentido decorrente da escolha de palavras, frases ou expressões.</p>

                        <p className='quesito'>07) Nesse texto, o trecho “– Benhê, acorda.”</p>

                        <input type="radio" name="q7" id="" value="A" required onClick={(e) => { setEstiloQ07("quadrado-questao-verde"), setQ7(e.target.value)}} />
                        <p className='opcao'>carinho..</p>

                        <input type="radio" name="q7" id="" value="B" onClick={(e) => { setEstiloQ07("quadrado-questao-verde"), setQ7(e.target.value)}} />
                        <p className='opcao'>infantilidade..</p>

                        <input type="radio" name="q7" id="" value="C" onClick={(e) => { setEstiloQ07("quadrado-questao-verde"), setQ7(e.target.value)}} />
                        <p className='opcao'>irritação..</p>

                        <input type="radio" name="q7" id="" value="D" onClick={(e) => { setEstiloQ07("quadrado-questao-verde"), setQ7(e.target.value)}} />
                        <p className='opcao'>preocupação..</p>

                        <input type="radio" name="q7" id="" value="E" onClick={(e) => { setEstiloQ07("quadrado-questao-verde"), setQ7(e.target.value)}} />
                        <p className='opcao'>revolta..</p>
                    </div>
                    {/* =========================================================== */}




                    {/* =========================================================== */}
                    <div id="q8" className="questao">
                        <h3>Questão 8</h3>
                        <p className='descritor'>Descritor D11: Interpretar textos não verbais e textos que articulam elementos verbais e não verbais.</p>
                        <p className='texto'>Leia o texto abaixo:</p> <br />
                        <br />

                        <img src={q8_parte1} alt="" width="100%" />
                        <img src={q8_parte2} alt="" width="100%" />

                        <p className='quesito'>08) Com base nesse texto, conclui-se que o menino</p>

                        <input type="radio" name="q8" id="" value="A" required onClick={(e) => { setEstiloQ08("quadrado-questao-verde"), setQ8(e.target.value)}} />
                        <p className='opcao'>é um excelente aluno.</p>

                        <input type="radio" name="q8" id="" value="B" onClick={(e) => { setEstiloQ08("quadrado-questao-verde"), setQ8(e.target.value)}} />
                        <p className='opcao'>faz sempre os deveres.</p>

                        <input type="radio" name="q8" id="" value="C" onClick={(e) => { setEstiloQ08("quadrado-questao-verde"), setQ8(e.target.value)}} />
                        <p className='opcao'>gosta de se autoelogiar.</p>

                        <input type="radio" name="q8" id="" value="D" onClick={(e) => { setEstiloQ08("quadrado-questao-verde"), setQ8(e.target.value)}} />
                        <p className='opcao'>tem medo da professora.</p>

                        <input type="radio" name="q8" id="" value="E" onClick={(e) => { setEstiloQ08("quadrado-questao-verde"), setQ8(e.target.value)}} />
                        <p className='opcao'>tenta enganar a mãe.</p>
                    </div>
                    {/* =========================================================== */}




                    <div id="q9" className="questao">
                        <h3>Questão 9</h3>
                        <p className='descritor'>Descritor D16: Estabelecer relação de causa e consequência entre partes de um texto.</p>
                        <p className='texto'>Leia o texto abaixo:</p> <br />

                        <p> <b>O anel de vidro</b></p>

                        <p className='texto-vocabulario'>Aquele pequenino anel que tu me deste,</p>

                        <p className='texto-vocabulario'>– Ai de mim – era vidro e logo se quebrou</p>

                        <p className='texto-vocabulario'>Assim também o eterno amor que prometeste,</p>

                        <p className='texto-vocabulario'>– Eterno! era bem pouco e cedo se acabou.</p>

                        <p className='texto-vocabulario'>Frágil penhor<sup>1</sup> que foi do amor que me tiveste,</p>

                        <p className='texto-vocabulario'>Símbolo da afeição que o tempo aniquilou,</p>

                        <p className='texto-vocabulario'>Aquele pequenino anel que tu me deste,</p>

                        <p className='texto-vocabulario'>– Ai de mim – era vidro e logo se quebrou</p>

                        <p className='texto-vocabulario'>Não me turbou, porém, o despeito que investe</p>

                        <p className='texto-vocabulario'>Gritando maldições contra aquilo que amou.</p>

                        <p className='texto-vocabulario'>De ti conservo no peito a saudade celeste</p>

                        <p className='texto-vocabulario'>Como também guardei o pó que me ficou</p>

                        <p className='texto-vocabulario'>Daquele pequenino anel que tu me deste</p>

                        <p className='fonte'>Vocabulário:
                            1Penhor: garantia, segurança.</p>

                        <br />

                        <p className='quesito'>09) De acordo com esse texto, o anel se quebrou porque</p>

                        <input type="radio" name="q9" id="" value="A" required onClick={(e) => { setEstiloQ09("quadrado-questao-verde"), setQ9(e.target.value)}} />
                        <p className='opcao'>a saudade foi conservada.</p>
                        <input type="radio" name="q9" id="" value="B" onClick={(e) => { setEstiloQ09("quadrado-questao-verde"), setQ9(e.target.value)}} />
                        <p className='opcao'>era de frágil penhor.</p>
                        <input type="radio" name="q9" id="" value="C" onClick={(e) => { setEstiloQ09("quadrado-questao-verde"), setQ9(e.target.value)}} />
                        <p className='opcao'>era pequeno.</p>
                        <input type="radio" name="q9" id="" value="D" onClick={(e) => { setEstiloQ09("quadrado-questao-verde"), setQ9(e.target.value)}} />
                        <p className='opcao'>foi feito de vidro.</p>
                        <input type="radio" name="q9" id="" value="E" onClick={(e) => { setEstiloQ09("quadrado-questao-verde"), setQ9(e.target.value)}} />
                        <p className='opcao'>o amor foi prometido.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q10" className="questao">
                        <h3>Questão 10</h3>
                        <p className='descritor'>Descritor D22: Identificar efeitos de humor no texto.</p>
                        <p className='texto'>Leia novamente o texto “O anel de vidro” para responder às questões abaixo.</p>
                        <br />
                        <p className='quesito'>10) Nesse texto, há um traço de ironia no verso:</p>

                        <input type="radio" name="q10" id="" value="A" required onClick={(e) => { setEstiloQ10("quadrado-questao-verde"), setQ10(e.target.value)}} />
                        <p className='opcao'>“Aquele pequenino anel que tu me deste,”.</p>

                        <input type="radio" name="q10" id="" value="B" onClick={(e) => { setEstiloQ10("quadrado-questao-verde"), setQ10(e.target.value)}} />
                        <p className='opcao'>“– Eterno! era bem pouco e cedo se acabou.”.</p>

                        <input type="radio" name="q10" id="" value="C" onClick={(e) => { setEstiloQ10("quadrado-questao-verde"), setQ10(e.target.value)}} />
                        <p className='opcao'>“Símbolo da afeição que o tempo aniquilou, –”.</p>

                        <input type="radio" name="q10" id="" value="D" onClick={(e) => { setEstiloQ10("quadrado-questao-verde"), setQ10(e.target.value)}} />
                        <p className='opcao'>“Não me turbou, porém, o despeito que investe”.</p>

                        <input type="radio" name="q10" id="" value="E" onClick={(e) => { setEstiloQ10("quadrado-questao-verde"), setQ10(e.target.value)}} />
                        <p className='opcao'>“De ti conservo no peito a saudade celeste”.</p>
                    </div>
                    {/* =========================================================== */}



                    {/* =========================================================== */}
                    <div id="q11" className="questao">
                        <h3>Questão 11</h3>
                        <p className='descritor'>Descritor D11: Inferir informação em um texto.</p>
                        <br />
                        <p className='quesito'>11) Nesse texto, sobre o relacionamento amoroso, o eu lírico</p>

                        <input type="radio" name="q11" id="" value="A" required onClick={(e) => { setEstiloQ11("quadrado-questao-verde"), setQ11(e.target.value)}} />
                        <p className='opcao'>ficou descontente com o anel.</p>

                        <input type="radio" name="q11" id="" value="B" onClick={(e) => { setEstiloQ11("quadrado-questao-verde"), setQ11(e.target.value)}} />
                        <p className='opcao'>guarda mágoas da pessoa amada.</p>

                        <input type="radio" name="q11" id="" value="C" onClick={(e) => { setEstiloQ11("quadrado-questao-verde"), setQ11(e.target.value)}} />
                        <p className='opcao'>mostra-se preso aos bens materiais.</p>

                        <input type="radio" name="q11" id="" value="D" onClick={(e) => { setEstiloQ11("quadrado-questao-verde"), setQ11(e.target.value)}} />
                        <p className='opcao'>sente-se superior à pessoa amada.</p>

                        <input type="radio" name="q11" id="" value="E" onClick={(e) => { setEstiloQ11("quadrado-questao-verde"), setQ11(e.target.value)}} />
                        <p className='opcao'>sofreu uma desilusão amorosa.</p>
                    </div>
                    {/* =========================================================== */}



                    {/* =========================================================== */}
                    <div id="q12" className="questao">
                        <h3>Questão 12</h3>
                        <p className='descritor'>Descritor D19: Identificar a tese de um texto.</p>

                        <p className='texto'>Leia o texto abaixo:</p> <br />

                        <p> <b>Idioma ajuda a criar marcas de identidade</b></p>

                        <p className='texto'>A língua é patrimônio de uma coletividade, seja ela a língua oficial de um Estado constituído, seja ela a língua materna de uma comunidade minoritária de imigrantes em um país estrangeiro, [...] e assim por diante. De qualquer modo, a língua constitui marca identitária da comunidade que a usa [...].</p>

                        <p className='texto'>Entretanto, nenhuma língua compõe um bloco de formas e construções cristalizadas, usadas sempre do mesmo modo por todos os falantes, isto é, nenhuma língua é cristalizada, sem variações, imutável. Aliás, imaginar uma língua que assim fosse é imaginar algo completamente impossível.</p>

                        <p className='texto'>Uma língua cumpre suas funções em uma comunidadeexatamente porque: ela é moldável, para satisfação dos propósitos da fala; ela é variável, para oferta às escolhas dos falantes; ela é dinâmica, para servir às necessidades de expressão nas diferentes situações, nos diferentes lugares, nos diferentes momentos. Só assim ela revela as identidades individuais que se constroem no espaço simbólico que ela própria identifica e marca, no conjunto. [...]</p>

                        <p className='texto'>Significa isso que se esteja negando a existência de padrões? Não, pelo contrário. Nessa variabilidade e nesse dinamismo naturalmente se formam “padrões” de uso, que, por sua vez, identificam grupos, e, numa apuração mais fina, identificam os próprios indivíduos.</p>

                        <p className='fonte'>NEVES, Maria Helena de Moura. Língua Portuguesa. Set. 2010. Fragmento. (P120091F5_SUP)</p>

                        <br />

                        <p className='quesito'>12) A ideia defendida nesse texto está no trecho:</p>

                        <input type="radio" name="q12" id="" value="A" required onClick={(e) => { setEstiloQ12("quadrado-questao-verde"), setQ12(e.target.value)}} />
                        <p className='opcao'>“A língua é patrimônio de uma coletividade,...”.</p>

                        <input type="radio" name="q12" id="" value="B" onClick={(e) => { setEstiloQ12("quadrado-questao-verde"), setQ12(e.target.value)}} />
                        <p className='opcao'>“... a língua constitui marca identitária da comunidade que a usa.”.</p>

                        <input type="radio" name="q12" id="" value="C" onClick={(e) => { setEstiloQ12("quadrado-questao-verde"), setQ12(e.target.value)}} />
                        <p className='opcao'>“... nenhuma língua é cristalizada, sem variações, imutável.”.</p>

                        <input type="radio" name="q12" id="" value="D" onClick={(e) => { setEstiloQ12("quadrado-questao-verde"), setQ12(e.target.value)}} />
                        <p className='opcao'>“Uma língua cumpre suas funções em uma comunidade...”.</p>

                        <input type="radio" name="q12" id="" value="E" onClick={(e) => { setEstiloQ12("quadrado-questao-verde"), setQ12(e.target.value)}} />
                        <p className='opcao'>“... ela é moldável, para satisfação dos propósitos da fala;...”.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q13" className="questao">
                        <h3>Questão 13</h3>
                        <p className='descritor'>Descritor D18: Estabelecer relações entre partes de um texto, identificando repetições ou substituições que contribuem para sua continuidade.</p>

                        <p className='quesito'>13) No trecho “... <u>que</u> se constroem no espaço simbólico...”, a palavra destacada retoma o termo</p>

                        <input type="radio" name="q13" id="" value="A" required onClick={(e) => { setEstiloQ13("quadrado-questao-verde"), setQ13(e.target.value)}} />
                        <p className='opcao'>diferentes situações.</p>

                        <input type="radio" name="q13" id="" value="B" onClick={(e) => { setEstiloQ13("quadrado-questao-verde"), setQ13(e.target.value)}} />
                        <p className='opcao'>escolhas.</p>

                        <input type="radio" name="q13" id="" value="C" onClick={(e) => { setEstiloQ13("quadrado-questao-verde"), setQ13(e.target.value)}} />
                        <p className='opcao'>identidades individuais.</p>

                        <input type="radio" name="q13" id="" value="D" onClick={(e) => { setEstiloQ13("quadrado-questao-verde"), setQ13(e.target.value)}} />
                        <p className='opcao'>necessidades.</p>

                        <input type="radio" name="q13" id="" value="E" onClick={(e) => { setEstiloQ13("quadrado-questao-verde"), setQ13(e.target.value)}} />
                        <p className='opcao'>propósitos da fala.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q14" className="questao">
                        <h3>Questão 14</h3>
                        <p className='descritor'>Descritor D24: Reconhecer o efeito de sentido decorrente da exploração de recursos estilísticos.</p>

                        <p className='texto'>Leia o texto abaixo:</p> <br />

                        <p> <b>A cavalgada</b></p>

                        <p className='texto-vocabulario'>A lua banha a solitária estrada...</p>
                        <p className='texto-vocabulario'>Silêncio!... Mas além, confuso e brando,</p>
                        <p className='texto-vocabulario'>O som longínquo vem-se aproximando</p>
                        <p className='texto-vocabulario'>Do galopar de estranha cavalgada.</p>
                        <p className='texto-vocabulario'>São fidalgos que voltam da caçada;</p>
                        <p className='texto-vocabulario'>Vêm alegres, vêm rindo, vêm cantando.</p>
                        <p className='texto-vocabulario'>E as trompas a soar vão agitando</p>
                        <p className='texto-vocabulario'>O remanso da noite embalsamada...</p>
                        <p className='texto-vocabulario'>E o bosque estala, move-se, estremece...</p>
                        <p className='texto-vocabulario'>Da cavalgada o estrépito1 que aumenta</p>
                        <p className='texto-vocabulario'>Perde-se após no centro da montanha...</p>
                        <p className='texto-vocabulario'>E o silêncio outra vez soturno desce...</p>
                        <p className='texto-vocabulario'>E límpida, sem mácula2, alvacenta</p>
                        <p className='texto-vocabulario'>A lua a estrada solitária banha...</p>
                        <br />

                        <p className='fonte'>Vocabulário: 1Estrépito: Agitação. 2Mácula: Mancha. <br />
                            CORREIA, Raimundo. Disponível em: http://www.academia.org.br/abl/cgi/cgilua.exe/sys/start.htm?infoid=251&sid=111. Acesso em: 30 jun. 2014.</p>

                        <br />

                        <p className='quesito'>14) Nesse texto, a construção do verso “Vêm alegres, vêm rindo, vêm cantando.” tem o objetivo de</p>

                        <input type="radio" name="q14" id="" value="A" required onClick={(e) => { setEstiloQ14("quadrado-questao-verde"), setQ14(e.target.value)}} />
                        <p className='opcao'>caracterizar a chegada dos fidalgos.</p>

                        <input type="radio" name="q14" id="" value="B" onClick={(e) => { setEstiloQ14("quadrado-questao-verde"), setQ14(e.target.value)}} />
                        <p className='opcao'>fazer uma crítica ao comportamento dos fidalgos.</p>

                        <input type="radio" name="q14" id="" value="C" onClick={(e) => { setEstiloQ14("quadrado-questao-verde"), setQ14(e.target.value)}} />
                        <p className='opcao'>comparar o sentido das palavras utilizadas.</p>

                        <input type="radio" name="q14" id="" value="D" onClick={(e) => { setEstiloQ14("quadrado-questao-verde"), setQ14(e.target.value)}} />
                        <p className='opcao'>reproduzir o som da cavalgada.</p>

                        <input type="radio" name="q14" id="" value="E" onClick={(e) => { setEstiloQ14("quadrado-questao-verde"), setQ14(e.target.value)}} />
                        <p className='opcao'>sugerir o exagero de uma ação.</p>
                    </div>
                    {/* =========================================================== */}



                    {/* =========================================================== */}
                    <div id="q15" className="questao">
                        <h3>Questão 15</h3>
                        <p className='descritor'>Descritor D26: Identificar as marcas linguísticas que evidenciam o locutor e o interlocutor de um texto.</p>
                        <br />

                        <p className='quesito'>15) A linguagem utilizada nesse texto é</p>

                        <input type="radio" name="q15" id="" value="A" required onClick={(e) => { setEstiloQ15("quadrado-questao-verde"), setQ15(e.target.value)}} />
                        <p className='opcao'>científica.</p>

                        <input type="radio" name="q15" id="" value="B" onClick={(e) => { setEstiloQ15("quadrado-questao-verde"), setQ15(e.target.value)}} />
                        <p className='opcao'>culta.</p>

                        <input type="radio" name="q15" id="" value="C" onClick={(e) => { setEstiloQ15("quadrado-questao-verde"), setQ15(e.target.value)}} />
                        <p className='opcao'>informal.</p>

                        <input type="radio" name="q15" id="" value="D" onClick={(e) => { setEstiloQ15("quadrado-questao-verde"), setQ15(e.target.value)}} />
                        <p className='opcao'>regional.</p>

                        <input type="radio" name="q15" id="" value="E" onClick={(e) => { setEstiloQ15("quadrado-questao-verde"), setQ15(e.target.value)}} />
                        <p className='opcao'>técnica.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q16" className="questao">
                        <h3>Questão 16</h3>
                        <p className='descritor'>Descritor 23: Reconhecer o efeito de sentido decorrente do uso da pontuação e de outros recursos gráficos.</p>
                        <br />

                        <p className='quesito'>16) As reticências utilizadas na última estrofe desse texto reforçam a ideia de</p>

                        <input type="radio" name="q16" id="" value="A" required onClick={(e) => { setEstiloQ16("quadrado-questao-verde"), setQ16(e.target.value)}} />
                        <p className='opcao'>continuidade de uma ação.</p>

                        <input type="radio" name="q16" id="" value="B" onClick={(e) => { setEstiloQ16("quadrado-questao-verde"), setQ16(e.target.value)}} />
                        <p className='opcao'>desconfiança.</p>

                        <input type="radio" name="q16" id="" value="C" onClick={(e) => { setEstiloQ16("quadrado-questao-verde"), setQ16(e.target.value)}} />
                        <p className='opcao'>interrupção do pensamento.</p>

                        <input type="radio" name="q16" id="" value="D" onClick={(e) => { setEstiloQ16("quadrado-questao-verde"), setQ16(e.target.value)}} />
                        <p className='opcao'>ironia.</p>

                        <input type="radio" name="q16" id="" value="E" onClick={(e) => { setEstiloQ16("quadrado-questao-verde"), setQ16(e.target.value)}} />
                        <p className='opcao'>suspense.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q17" className="questao">
                        <h3>Questão 17</h3>
                        <p className='descritor'>Descritor 12: Identificar o gênero do texto.</p>
                        <p className='texto'>Leia o texto abaixo:</p> <br />
                        <br />

                        <img src={q17_img} alt="" width="100%" />

                        <p className='fonte'>Disponível em: http://migre.me/rffvk. Acesso em: 26 mar. 2015.</p>
                        <br />

                        <p className='quesito'>17) Qual é o gênero desse texto?</p>

                        <input type="radio" name="q17" id="" value="A" required onClick={(e) => { setEstiloQ17("quadrado-questao-verde"), setQ17(e.target.value)}} />
                        <p className='opcao'>Caricatura.</p>

                        <input type="radio" name="q17" id="" value="B" onClick={(e) => { setEstiloQ17("quadrado-questao-verde"), setQ17(e.target.value)}} />
                        <p className='opcao'>Cartaz.</p>

                        <input type="radio" name="q17" id="" value="C" onClick={(e) => { setEstiloQ17("quadrado-questao-verde"), setQ17(e.target.value)}} />
                        <p className='opcao'>Charge.</p>

                        <input type="radio" name="q17" id="" value="D" onClick={(e) => { setEstiloQ17("quadrado-questao-verde"), setQ17(e.target.value)}} />
                        <p className='opcao'>Panfleto.</p>

                        <input type="radio" name="q17" id="" value="E" onClick={(e) => { setEstiloQ17("quadrado-questao-verde"), setQ17(e.target.value)}} />
                        <p className='opcao'>Tirinha.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q18" className="questao">
                        <h3>Questão 18</h3>
                        <p className='descritor'>Descritor 09: Identificar o tema de um texto.</p>

                        <p className='texto'>Leia o texto abaixo:</p> <br />

                        <p> <b>O universo de Ziraldo</b></p>

                        <p className='texto'>Nascido em 24 de outubro de 1932, Ziraldo Alves Pinto é o mais velho de sete irmãos, e entre eles há outro cartunista, o Zélio. O nome curioso advém da combinação de sílabas dos nomes da mãe Zizinha e do pai, Geraldo. Coisa que os pais no Brasil costumam fazer e acabam inventando nomes para os filhos.</p>

                        <p className='texto'>Ziraldo nasceu em Minas Gerais, na cidade de Caratinga, onde viveu até a adolescência, quando depois de cursar o Grupo Escolar Princesa Isabel, veio com o avô para o Rio de Janeiro, estudar no MABE (Moderna Associação Brasileira de Ensino). Em 1950, voltou para seu estado, estudou mais e acabou formando-se advogado em Belo Horizonte, na Faculdade de Direito de Minas Gerais.</p>

                        <p className='texto'>Afeito ao desenho desde os mais tenros anos de vida, Ziraldo publicou seu primeiro desenho com apenas 6 anos de idade, no jornal A Folha de Minas.</p>

                        <p className='texto'>Em 1958, já morando fora de Minas Gerais, desembocou o namoro de sete anos com Vilma Gontijo, num casamento que lhe trouxe três filhos: Daniela, Fabrizia e Antônio, além de seis netos.</p>

                        <p className='fonte'>Conhecimento Prático Literatura. Jan. 2011. p. 61. Fragmento. (P110195ES_SUP)</p>

                        <br />

                        <p className='quesito'>18) Qual é o assunto tratado nesse texto?</p>

                        <input type="radio" name="q18" id="" value="A" required onClick={(e) => { setEstiloQ18("quadrado-questao-verde"), setQ18(e.target.value)}} />
                        <p className='opcao'>A formação escolar de Ziraldo.</p>

                        <input type="radio" name="q18" id="" value="B" onClick={(e) => { setEstiloQ18("quadrado-questao-verde"), setQ18(e.target.value)}} />
                        <p className='opcao'>Aspectos biográficos de Ziraldo.</p>

                        <input type="radio" name="q18" id="" value="C" onClick={(e) => { setEstiloQ18("quadrado-questao-verde"), setQ18(e.target.value)}} />
                        <p className='opcao'>A mudança para o Rio de Janeiro.</p>

                        <input type="radio" name="q18" id="" value="D" onClick={(e) => { setEstiloQ18("quadrado-questao-verde"), setQ18(e.target.value)}} />
                        <p className='opcao'>A família de origem de Ziraldo.</p>

                        <input type="radio" name="q18" id="" value="E" onClick={(e) => { setEstiloQ18("quadrado-questao-verde"), setQ18(e.target.value)}} />
                        <p className='opcao'>Aspectos da obra do Cartunista.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q19" className="questao">
                        <h3>Questão 19</h3>

                        <p className='descritor'>Descritor 08: Inferir sentido de palavra ou expressão a partir do contexto</p>

                        <p className='texto'>Leia novamente o texto “O universo de Ziraldo” para responder às questões abaixo.</p>
                        <br />

                        <p className='quesito'>19) No trecho “... <u>desembocou</u> o namoro de sete anos com Vilma Gontijo, num casamento...”, a palavra destacada adquire, no contexto, sentido de</p>

                        <input type="radio" name="q19" id="" value="A" required onClick={(e) => { setEstiloQ19("quadrado-questao-verde"), setQ19(e.target.value)}} />
                        <p className='opcao'>assumiu.</p>

                        <input type="radio" name="q19" id="" value="B" onClick={(e) => { setEstiloQ19("quadrado-questao-verde"), setQ19(e.target.value)}} />
                        <p className='opcao'>começou.</p>

                        <input type="radio" name="q19" id="" value="C" onClick={(e) => { setEstiloQ19("quadrado-questao-verde"), setQ19(e.target.value)}} />
                        <p className='opcao'>decidiu.</p>

                        <input type="radio" name="q19" id="" value="D" onClick={(e) => { setEstiloQ19("quadrado-questao-verde"), setQ19(e.target.value)}} />
                        <p className='opcao'>levou.</p>

                        <input type="radio" name="q19" id="" value="E" onClick={(e) => { setEstiloQ19("quadrado-questao-verde"), setQ19(e.target.value)}} />
                        <p className='opcao'>transformou.</p>
                    </div>
                    {/* =========================================================== */}


                    {/* =========================================================== */}
                    <div id="q20" className="questao">
                        <h3>Questão 20</h3>

                        <p className='descritor'>Descritor 06: Localizar informações explícitas em um texto.</p>

                        <p className='quesito'>20) De acordo com esse texto, o nome que resultou da junção de sílabas dos nomes dos pais foi</p>

                        <input type="radio" name="q20" id="" value="A" required onClick={(e) => { setEstiloQ20("quadrado-questao-verde"), setQ20(e.target.value)}} />
                        <p className='opcao'>Zélio.</p>

                        <input type="radio" name="q20" id="" value="B" onClick={(e) => { setEstiloQ20("quadrado-questao-verde"), setQ20(e.target.value)}} />
                        <p className='opcao'>Ziraldo.</p>

                        <input type="radio" name="q20" id="" value="C" onClick={(e) => { setEstiloQ20("quadrado-questao-verde"), setQ20(e.target.value)}} />
                        <p className='opcao'>Daniela.</p>

                        <input type="radio" name="q20" id="" value="D" onClick={(e) => { setEstiloQ20("quadrado-questao-verde"), setQ20(e.target.value)}} />
                        <p className='opcao'>Fabrizia.</p>

                        <input type="radio" name="q20" id="" value="E" onClick={(e) => { setEstiloQ20("quadrado-questao-verde"), setQ20(e.target.value)}} />
                        <p className='opcao'>Antônio.</p>
                    </div>
                    {/* =========================================================== */}


                </div>














                {/* ================================================ */}

                <div>

                    <h2 className='title'>Questões de Matemática</h2>
                    <hr />

                </div>

                {/* ================================================ */}

                {/* =========================================================== */}
                <div id="q21" className="questao-matematica">
                    <h3>Questão 21</h3>

                    <p className='quesito'>(D-13) (ENCCEJA) O projeto original de uma residência previa a construção de uma piscina retangular com as seguintes dimensões: 9 metros de comprimento, 5 metros de largura e 1,8 metro de profundidade. Devido à existência de tubulação no subsolo da residência, a profundidade dessa piscina teve que ser limitada a 1,5 metro. O proprietário aprovou a construção da piscina com essa profundidade, desde que seu comprimento e capacidade (volume) originais fossem mantidos e solicitou ao engenheiro responsável uma adequação no projeto. A largura da piscina, em metro, informada pelo engenheiro no novo projeto é</p>

                    <input type="radio" name="q21" id="" value="A" required onClick={(e) => { setEstiloQ21("quadrado-questao-verde"), setQ21(e.target.value)}} />
                    <p className='opcao'>5,03.</p>

                    <input type="radio" name="q21" id="" value="B" onClick={(e) => { setEstiloQ21("quadrado-questao-verde"), setQ21(e.target.value)}} />
                    <p className='opcao'>5,15.</p>

                    <input type="radio" name="q21" id="" value="C" onClick={(e) => { setEstiloQ21("quadrado-questao-verde"), setQ21(e.target.value)}} />
                    <p className='opcao'>5,30.</p>

                    <input type="radio" name="q21" id="" value="D" onClick={(e) => { setEstiloQ21("quadrado-questao-verde"), setQ21(e.target.value)}} />
                    <p className='opcao'>6,00.</p>

                </div>
                {/* =========================================================== */}

                {/* =========================================================== */}
                <div id="q22" className="questao-matematica">
                    <h3>Questão 22</h3>

                    <p className='quesito'>22)(D-23)Observe abaixo o esboço do gráfico de uma função polinomial do 1º grau f: IR → IR.</p>

                    <img src={q22_img} alt="" width="100%" />

                    <p className='quesito'>A representação algébrica dessa função é</p>

                    <input type="radio" name="q22" id="" value="A" required onClick={(e) => { setEstiloQ22("quadrado-questao-verde"), setQ22(e.target.value)}} />
                    <p className='opcao'>f(x) = x + 4</p>

                    <input type="radio" name="q22" id="" value="B" onClick={(e) => { setEstiloQ22("quadrado-questao-verde"), setQ22(e.target.value)}} />
                    <p className='opcao'>f(x) = x – 4</p>

                    <input type="radio" name="q22" id="" value="C" onClick={(e) => { setEstiloQ22("quadrado-questao-verde"), setQ22(e.target.value)}} />
                    <p className='opcao'>f(x) = – 4x</p>

                    <input type="radio" name="q22" id="" value="D" onClick={(e) => { setEstiloQ22("quadrado-questao-verde"), setQ22(e.target.value)}} />
                    <p className='opcao'>f(x) = – 4x + 1</p>

                    <input type="radio" name="q22" id="" value="E" onClick={(e) => { setEstiloQ22("quadrado-questao-verde"), setQ22(e.target.value)}} />
                    <p className='opcao'>f(x) = – 4x + 4</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q23" className="questao-matematica">
                    <h3>Questão 23</h3>

                    <p className='quesito'>23)(D-19) (ENCCEJA) O dono de um estacionamento criou uma expressão algébrica para facilitar o cálculo do valor cobrado de cada carro (y), em real, pela utilização do estacionamento por x hora. Nesse cálculo, considera somente valores inteiros de hora, e cada fração de hora é considerada como uma hora de utilização. Nesse estacionamento é cobrada a taxa de R$ 3,00 pela primeira hora de permanência e, da segunda hora em diante, são cobrados R$ 2,00 adicionais para cada hora de permanência do carro. A representação algébrica correta criada pelo dono do estacionamento foi</p>

                    <input type="radio" name="q23" id="" value="A" required onClick={(e) => { setEstiloQ23("quadrado-questao-verde"), setQ23(e.target.value)}} />
                    <p className='opcao'>y = 5x</p>

                    <input type="radio" name="q23" id="" value="B" onClick={(e) => { setEstiloQ23("quadrado-questao-verde"), setQ23(e.target.value)}} />
                    <p className='opcao'>y = 6x</p>

                    <input type="radio" name="q23" id="" value="C" onClick={(e) => { setEstiloQ23("quadrado-questao-verde"), setQ23(e.target.value)}} />
                    <p className='opcao'>y = 3 + 2x</p>

                    <input type="radio" name="q23" id="" value="D" onClick={(e) => { setEstiloQ23("quadrado-questao-verde"), setQ23(e.target.value)}} />
                    <p className='opcao'>y = 3 + 2(x - 1)</p>

                    <input type="radio" name="q23" id="" value="E" onClick={(e) => { setEstiloQ23("quadrado-questao-verde"), setQ23(e.target.value)}} />
                    <p className='opcao'>NDA</p>

                </div>
                {/* =========================================================== */}

                {/* =========================================================== */}
                <div id="q24" className="questao-matematica">
                    <h3>Questão 24</h3>

                    <p className='quesito'>24)(D-20) (ENCCEJA) No primeiro semestre de 2013, o tomate apareceu como vilão da alta de preços dos produtos agrícolas no Brasil. O gráfico mostra o resultado de uma pesquisa feita em uma cidade B sobre o preço do tomate, no período de janeiro a agosto de 2013.</p>

                    <img src={q24_img} alt="" width="100%" />

                    <p className='quesito'>Qual foi o período em que houve a maior variação de aumento do preço do tomate?</p>

                    <input type="radio" name="q24" id="" value="A" required onClick={(e) => { setEstiloQ24("quadrado-questao-verde"), setQ24(e.target.value)}} />
                    <p className='opcao'>Janeiro a fevereiro.</p>

                    <input type="radio" name="q24" id="" value="B" onClick={(e) => { setEstiloQ24("quadrado-questao-verde"), setQ24(e.target.value)}} />
                    <p className='opcao'>Março a abril. </p>

                    <input type="radio" name="q24" id="" value="C" onClick={(e) => { setEstiloQ24("quadrado-questao-verde"), setQ24(e.target.value)}} />
                    <p className='opcao'>Abril a maio.</p>

                    <input type="radio" name="q24" id="" value="D" onClick={(e) => { setEstiloQ24("quadrado-questao-verde"), setQ24(e.target.value)}} />
                    <p className='opcao'>Maio a junho.</p>

                    <input type="radio" name="q24" id="" value="E" onClick={(e) => { setEstiloQ24("quadrado-questao-verde"), setQ24(e.target.value)}} />
                    <p className='opcao'>NDA</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q25" className="questao-matematica">
                    <h3>Questão 25</h3>

                    <p className='quesito'>25)(D-19) (ENCCEJA) Um entregador utiliza em seu trabalho um caminhão com um tanque de combustível com capacidade para 100 litros e que percorre, em média, 7 km com 1 litro de óleo diesel. Em seu trajeto diário de entregas, ele percorre 84 km. Estando o tanque de combustível inicialmente cheio, a quantidade q de litros de óleo diesel que restam no tanque de combustível do caminhão depende da quantidade d de dias trabalhados. A representação algébrica que descreve a quantidade q de óleo diesel restante no tanque, em função da quantidade d de dias trabalhados, é </p>

                    <input type="radio" name="q25" id="" value="A" required onClick={(e) => { setEstiloQ25("quadrado-questao-verde"), setQ25(e.target.value)}} />
                    <p className='opcao'>q = 100 – 7d</p>

                    <input type="radio" name="q25" id="" value="B" onClick={(e) => { setEstiloQ25("quadrado-questao-verde"), setQ25(e.target.value)}} />
                    <p className='opcao'>q = 100 – 12d</p>

                    <input type="radio" name="q25" id="" value="C" onClick={(e) => { setEstiloQ25("quadrado-questao-verde"), setQ25(e.target.value)}} />
                    <p className='opcao'>q = 100 – 84d</p>

                    <input type="radio" name="q25" id="" value="D" onClick={(e) => { setEstiloQ25("quadrado-questao-verde"), setQ25(e.target.value)}} />
                    <p className='opcao'>q = 100 – 91d</p>

                    <input type="radio" name="q25" id="" value="E" onClick={(e) => { setEstiloQ25("quadrado-questao-verde"), setQ25(e.target.value)}} />
                    <p className='opcao'>NDA</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q26" className="questao-matematica">
                    <h3>Questão 26</h3>

                    <p className='quesito'>26) (PAEBES). Durante um forte vento, um barco teve uma de suas velas danificadas. O capitão desse barco ancorou na cidade mais próxima com objetivo de comprar o tecido necessário para confeccionar uma vela substituta. Observe abaixo o desenho desse barco e de sua vela com algumas medidas indicadas.</p>

                    <img src={q26_img} alt="" width="100%" />

                    <p className='quesito'>A quantidade mínima de tecido, em metros quadrados, que o capitão deverá comprar para confeccionar essa vela é</p>

                    <input type="radio" name="q26" id="" value="A" required onClick={(e) => { setEstiloQ26("quadrado-questao-verde"), setQ26(e.target.value)}} />
                    <p className='opcao'>250.</p>

                    <input type="radio" name="q26" id="" value="B" onClick={(e) => { setEstiloQ26("quadrado-questao-verde"), setQ26(e.target.value)}} />
                    <p className='opcao'>325.</p>

                    <input type="radio" name="q26" id="" value="C" onClick={(e) => { setEstiloQ26("quadrado-questao-verde"), setQ26(e.target.value)}} />
                    <p className='opcao'>380.</p>

                    <input type="radio" name="q26" id="" value="D" onClick={(e) => { setEstiloQ26("quadrado-questao-verde"), setQ26(e.target.value)}} />
                    <p className='opcao'>450</p>

                    <input type="radio" name="q26" id="" value="E" onClick={(e) => { setEstiloQ26("quadrado-questao-verde"), setQ26(e.target.value)}} />
                    <p className='opcao'>NDA</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q27" className="questao-matematica">
                    <h3>Questão 27</h3>

                    <p className='quesito'>27) A função  , IR está representada graficamente por:</p>

                    <img src={q27_img} alt="" width="100%" />

                    <p className='quesito'>Pode-se afirmar que a função f:</p>

                    <input type="radio" name="q27" id="" value="A" required onClick={(e) => { setEstiloQ27("quadrado-questao-verde"), setQ27(e.target.value)}} />
                    <p className='opcao'>tem raízes reais negativas.</p>

                    <input type="radio" name="q27" id="" value="B" onClick={(e) => { setEstiloQ27("quadrado-questao-verde"), setQ27(e.target.value)}} />
                    <p className='opcao'>possui valor mínimo.</p>

                    <input type="radio" name="q27" id="" value="C" onClick={(e) => { setEstiloQ27("quadrado-questao-verde"), setQ27(e.target.value)}} />
                    <p className='opcao'>tem raízes reais positivas.</p>

                    <input type="radio" name="q27" id="" value="D" onClick={(e) => { setEstiloQ27("quadrado-questao-verde"), setQ27(e.target.value)}} />
                    <p className='opcao'>tem valor mínimo igual a -1</p>

                    <input type="radio" name="q27" id="" value="E" onClick={(e) => { setEstiloQ27("quadrado-questao-verde"), setQ27(e.target.value)}} />
                    <p className='opcao'>não possui raízes reais.</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q28" className="questao-matematica">
                    <h3>Questão 28</h3>

                    <p className='quesito'>28)(D-14)(SAEPE) Observe a reta numérica abaixo. Essa reta está dividida em segmentos de mesma medida.</p>

                    <img src={q28_img} alt="" width="100%" />

                    <p className='quesito'>Nessa reta numérica, o ponto P representa o número</p>

                    <input type="radio" name="q28" id="" value="A" required onClick={(e) => { setEstiloQ28("quadrado-questao-verde"), setQ28(e.target.value)}} />
                    <p className='opcao'>6.</p>

                    <input type="radio" name="q28" id="" value="B" onClick={(e) => { setEstiloQ28("quadrado-questao-verde"), setQ28(e.target.value)}} />
                    <p className='opcao'>3.</p>

                    <input type="radio" name="q28" id="" value="C" onClick={(e) => { setEstiloQ28("quadrado-questao-verde"), setQ28(e.target.value)}} />
                    <p className='opcao'>2.</p>

                    <input type="radio" name="q28" id="" value="D" onClick={(e) => { setEstiloQ28("quadrado-questao-verde"), setQ28(e.target.value)}} />
                    <p className='opcao'>-3</p>

                    <input type="radio" name="q28" id="" value="E" onClick={(e) => { setEstiloQ28("quadrado-questao-verde"), setQ28(e.target.value)}} />
                    <p className='opcao'>-6.</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q29" className="questao-matematica">
                    <h3>Questão 29</h3>

                    <p className='quesito'>29) (D-20) Uma determinada função f(x) tem o gráfico representado abaixo. A respeito dessa função f(x) é correto afirmar que:</p>

                    <img src={q29_img} alt="" width="100%" />

                    <input type="radio" name="q29" id="" value="A" required onClick={(e) => { setEstiloQ29("quadrado-questao-verde"), setQ29(e.target.value)}} />
                    <p className='opcao'>a função é sempre crescente para x &lt; 0.</p>

                    <input type="radio" name="q29" id="" value="B" onClick={(e) => { setEstiloQ29("quadrado-questao-verde"), setQ29(e.target.value)}} />
                    <p className='opcao'>a função é positiva para todo x ≥ 0.</p>

                    <input type="radio" name="q29" id="" value="C" onClick={(e) => { setEstiloQ29("quadrado-questao-verde"), setQ29(e.target.value)}} />
                    <p className='opcao'>a função tem apenas duas raízes reais.</p>

                    <input type="radio" name="q29" id="" value="D" onClick={(e) => { setEstiloQ29("quadrado-questao-verde"), setQ29(e.target.value)}} />
                    <p className='opcao'>a função é negativa para todo x ≥ 0</p>

                    <input type="radio" name="q29" id="" value="E" onClick={(e) => { setEstiloQ29("quadrado-questao-verde"), setQ29(e.target.value)}} />
                    <p className='opcao'>a função é crescente no intervalo – 4 ≤ x ≤ –2.</p>

                </div>
                {/* =========================================================== */}

                {/* =========================================================== */}
                <div id="q30" className="questao-matematica">
                    <h3>Questão 30</h3>

                    <p className='quesito'>30) (D-05) (ENCCEJA) Uma gangorra deve ser construída apoiando-a pelo ponto médio num suporte central de 0,5 metro de altura. Seus assentos, situados em suas extremidades, devem atingir no máximo 1 metro de altura e, ao tocar o solo, formar com este um ângulo de 30°, qualquer que seja o lado da gangora a tocar o solo.</p>

                    <img src={q30_img} alt="" width="100%" />

                    <p className='quesito'>Para que os assentos não ultrapassem a altura máxima estabelecida, o comprimento da gangorra, em metro, deve ser </p>

                    <input type="radio" name="q30" id="" value="A" required onClick={(e) => { setEstiloQ30("quadrado-questao-verde"), setQ30(e.target.value)}} />
                    <p className='opcao'>0,50.</p>

                    <input type="radio" name="q30" id="" value="B" onClick={(e) => { setEstiloQ30("quadrado-questao-verde"), setQ30(e.target.value)}} />
                    <p className='opcao'>1,00.</p>

                    <input type="radio" name="q30" id="" value="C" onClick={(e) => { setEstiloQ30("quadrado-questao-verde"), setQ30(e.target.value)}} />
                    <p className='opcao'>1,15.</p>

                    <input type="radio" name="q30" id="" value="D" onClick={(e) => { setEstiloQ30("quadrado-questao-verde"), setQ30(e.target.value)}} />
                    <p className='opcao'>2,00.</p>

                    <input type="radio" name="q30" id="" value="E" onClick={(e) => { setEstiloQ30("quadrado-questao-verde"), setQ30(e.target.value)}} />
                    <p className='opcao'>NDA.</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q31" className="questao-matematica">
                    <h3>Questão 31</h3>

                    <p className='quesito'>31) (D-15) (ENCCEJA) O esquema da Figura I mostra um lance de arquibancada de um estádio de futebol (com dez degraus). O clube responsável por esse estádio resolveu fazer uma reforma para aumentar a capacidade de público nos jogos (Figura II). Os novos degraus devem ter as mesmas dimensões que os degraus da arquibancada da Figura I. </p>

                    <img src={q31_img} alt="" width="100%" />

                    <p className='quesito'>Nessas condições, quantos degraus haverá na nova arquibancada? </p>

                    <input type="radio" name="q31" id="" value="A" required onClick={(e) => { setEstiloQ31("quadrado-questao-verde"), setQ31(e.target.value)}} />
                    <p className='opcao'>22 .</p>

                    <input type="radio" name="q31" id="" value="B" onClick={(e) => { setEstiloQ31("quadrado-questao-verde"), setQ31(e.target.value)}} />
                    <p className='opcao'>17 .</p>

                    <input type="radio" name="q31" id="" value="C" onClick={(e) => { setEstiloQ31("quadrado-questao-verde"), setQ31(e.target.value)}} />
                    <p className='opcao'>15 .</p>

                    <input type="radio" name="q31" id="" value="D" onClick={(e) => { setEstiloQ31("quadrado-questao-verde"), setQ31(e.target.value)}} />
                    <p className='opcao'>12  .</p>

                    <input type="radio" name="q31" id="" value="E" onClick={(e) => { setEstiloQ31("quadrado-questao-verde"), setQ31(e.target.value)}} />
                    <p className='opcao'>NDA.</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q32" className="questao-matematica">
                    <h3>Questão 32</h3>

                    <p className='quesito'>32)(D-17) (SARESP-2011) Em um porta-retratos, a região retangular A, destinada à colocação da foto, é contornada por uma moldura de vidro fosco, que aparece sombreada na figura.</p>

                    <img src={q32_img} alt="" width="100%" />

                    <p className='quesito'>Sabendo que a moldura possui 132 cm², pode-se concluir que a medida indicada por x, na figura, é igual a</p>

                    <input type="radio" name="q32" id="" value="A" required onClick={(e) => { setEstiloQ32("quadrado-questao-verde"), setQ32(e.target.value)}} />
                    <p className='opcao'>12 cm .</p>

                    <input type="radio" name="q32" id="" value="B" onClick={(e) => { setEstiloQ32("quadrado-questao-verde"), setQ32(e.target.value)}} />
                    <p className='opcao'>12 cm .</p>

                    <input type="radio" name="q32" id="" value="C" onClick={(e) => { setEstiloQ32("quadrado-questao-verde"), setQ32(e.target.value)}} />
                    <p className='opcao'>16 cm .</p>

                    <input type="radio" name="q32" id="" value="D" onClick={(e) => { setEstiloQ32("quadrado-questao-verde"), setQ32(e.target.value)}} />
                    <p className='opcao'>18 cm .</p>

                    <input type="radio" name="q32" id="" value="E" onClick={(e) => { setEstiloQ32("quadrado-questao-verde"), setQ32(e.target.value)}} />
                    <p className='opcao'>NDA.</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q33" className="questao-matematica">
                    <h3>Questão 33</h3>

                    <p className='quesito'>33) (D-02) (ENCCEJA) O dono de um restaurante deseja instalar um toldo para cobrir uma região plana retangular de seu estabelecimento. Esse toldo consiste numa lona, apoiada por quatro hastes perpendiculares ao chão: duas com 3 m e duas com 1 m cada. A distância entre uma haste menor e uma maior é igual a 2 m, conforme ilustrado na figura.</p>

                    <img src={q33_img} alt="" width="100%" />

                    <p className='quesito'>O fabricante escolhido por ele apresenta quatro possibilidades de comprimento de lona, listadas no quadro.</p>

                    <img src={q33_parte2} alt="" width="100%" />

                    <p className='quesito'>O dono do restaurante decide comprar a lona de menor comprimento que seja capaz de atender suas necessidades. A lona que ele comprará é a do tipo</p>

                    <input type="radio" name="q33" id="" value="A" required onClick={(e) => { setEstiloQ33("quadrado-questao-verde"), setQ33(e.target.value)}} />
                    <p className='opcao'>I.</p>

                    <input type="radio" name="q33" id="" value="B" onClick={(e) => { setEstiloQ33("quadrado-questao-verde"), setQ33(e.target.value)}} />
                    <p className='opcao'>II.</p>

                    <input type="radio" name="q33" id="" value="C" onClick={(e) => { setEstiloQ33("quadrado-questao-verde"), setQ33(e.target.value)}} />
                    <p className='opcao'>III.</p>

                    <input type="radio" name="q33" id="" value="D" onClick={(e) => { setEstiloQ33("quadrado-questao-verde"), setQ33(e.target.value)}} />
                    <p className='opcao'>IV.</p>

                    <input type="radio" name="q33" id="" value="E" onClick={(e) => { setEstiloQ33("quadrado-questao-verde"), setQ33(e.target.value)}} />
                    <p className='opcao'>NDA.</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q34" className="questao-matematica">
                    <h3>Questão 34</h3>

                    <p className='quesito'>34)(D-06) (ENCCEJA) O mapa da figura, sobreposto por um sistema de coordenadas cartesianas, representa o local onde uma embarcação foi vista pela última vez. A guarda costeira da cidade de Fortaleza suspeita de naufrágio.</p>

                    <img src={q34_img} alt="" width="100%" />

                    <p className='quesito'>As coordenadas que correspondem ao ponto indicado no mapa são </p>

                    <input type="radio" name="q34" id="" value="A" required onClick={(e) => { setEstiloQ34("quadrado-questao-verde"), setQ34(e.target.value)}} />
                    <p className='opcao'>(-1 ; 3).</p>

                    <input type="radio" name="q34" id="" value="B" onClick={(e) => { setEstiloQ34("quadrado-questao-verde"), setQ34(e.target.value)}} />
                    <p className='opcao'>(3 ; -1).</p>

                    <input type="radio" name="q34" id="" value="C" onClick={(e) => { setEstiloQ34("quadrado-questao-verde"), setQ34(e.target.value)}} />
                    <p className='opcao'>(4 ; 7).</p>

                    <input type="radio" name="q34" id="" value="D" onClick={(e) => { setEstiloQ34("quadrado-questao-verde"), setQ34(e.target.value)}} />
                    <p className='opcao'>(7 ; 4).</p>

                    <input type="radio" name="q34" id="" value="E" onClick={(e) => { setEstiloQ34("quadrado-questao-verde"), setQ34(e.target.value)}} />
                    <p className='opcao'>(5,11).</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q35" className="questao-matematica">
                    <h3>Questão 35</h3>

                    <p className='quesito'>35)(D-16) (ENCCEJA) Um comerciante de tapiocas e sucos decide aumentar em 10% o valor arrecadado com a venda conjunta de seus produtos. Ele já decidiu que o aumento no valor do copo de suco será de 15%. A quantidade de tapiocas e copos de suco vendidos é igual. Os valores atuais para venda de uma tapioca e de um copo de suco são R$ 3,00 e R$ 1,00, respectivamente. Considere que o volume de vendas não será alterado. O novo valor de venda da tapioca, em real, deverá ser igual a </p>

                    <input type="radio" name="q35" id="" value="A" required onClick={(e) => { setEstiloQ35("quadrado-questao-verde"), setQ35(e.target.value)}} />
                    <p className='opcao'>3,25.</p>

                    <input type="radio" name="q35" id="" value="B" onClick={(e) => { setEstiloQ35("quadrado-questao-verde"), setQ35(e.target.value)}} />
                    <p className='opcao'>3,30.</p>

                    <input type="radio" name="q35" id="" value="C" onClick={(e) => { setEstiloQ35("quadrado-questao-verde"), setQ35(e.target.value)}} />
                    <p className='opcao'>3,40.</p>

                    <input type="radio" name="q35" id="" value="D" onClick={(e) => { setEstiloQ35("quadrado-questao-verde"), setQ35(e.target.value)}} />
                    <p className='opcao'>3,45.</p>

                </div>
                {/* =========================================================== */}

                {/* =========================================================== */}
                <div id="q36" className="questao-matematica">
                    <h3>Questão 36</h3>

                    <p className='quesito'>36)(D-11) Marcos usou dois triângulos e dois trapézios idênticos aos das figuras I e II para construir o retângulo ABCD, conforme o desenho abaixo.</p>

                    <img src={q36_img} alt="" width="100%" />

                    <p className='quesito'>Qual é a medida do perímetro do retângulo ABCD construído por Marcos?</p>

                    <input type="radio" name="q36" id="" value="A" required onClick={(e) => { setEstiloQ36("quadrado-questao-verde"), setQ36(e.target.value)}} />
                    <p className='opcao'>30 cm </p>

                    <input type="radio" name="q36" id="" value="B" onClick={(e) => { setEstiloQ36("quadrado-questao-verde"), setQ36(e.target.value)}} />
                    <p className='opcao'>32 cm </p>

                    <input type="radio" name="q36" id="" value="C" onClick={(e) => { setEstiloQ36("quadrado-questao-verde"), setQ36(e.target.value)}} />
                    <p className='opcao'>44 cm </p>

                    <input type="radio" name="q36" id="" value="D" onClick={(e) => { setEstiloQ36("quadrado-questao-verde"), setQ36(e.target.value)}} />
                    <p className='opcao'>47 cm </p>

                    <input type="radio" name="q36" id="" value="E" onClick={(e) => { setEstiloQ36("quadrado-questao-verde"), setQ36(e.target.value)}} />
                    <p className='opcao'>56 cm </p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q37" className="questao-matematica">
                    <h3>Questão 37</h3>

                    <p className='quesito'>37)(D-33) (ENCCEJA) Uma pessoa que nasceu em 1970, curiosa sobre a taxa de analfabetismo daquele ano, observou o gráfico que informa o percentual das pessoas analfabetas com 15 anos ou mais.</p>

                    <img src={q37_img} alt="" width="100%" />

                    <p className='quesito'>Qual a taxa de analfabetismo das pessoas com 15 anos ou mais em 1970? </p>

                    <input type="radio" name="q37" id="" value="A" required onClick={(e) => { setEstiloQ37("quadrado-questao-verde"), setQ37(e.target.value)}} />
                    <p className='opcao'>13,6% </p>

                    <input type="radio" name="q37" id="" value="B" onClick={(e) => { setEstiloQ37("quadrado-questao-verde"), setQ37(e.target.value)}} />
                    <p className='opcao'>20,1%     </p>

                    <input type="radio" name="q37" id="" value="C" onClick={(e) => { setEstiloQ37("quadrado-questao-verde"), setQ37(e.target.value)}} />
                    <p className='opcao'>33,6% </p>

                    <input type="radio" name="q37" id="" value="D" onClick={(e) => { setEstiloQ37("quadrado-questao-verde"), setQ37(e.target.value)}} />
                    <p className='opcao'>35,0%    </p>

                    <input type="radio" name="q37" id="" value="E" onClick={(e) => { setEstiloQ37("quadrado-questao-verde"), setQ37(e.target.value)}} />
                    <p className='opcao'>NDA</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q38" className="questao-matematica">
                    <h3>Questão 38</h3>

                    <p className='quesito'>38)(SAEPE) Para economizar energia, um supermercado desliga uma câmara fria por algumas horas e depois a religa, de forma que entre meia noite (0 hora) e seis horas da manhã, a temperatura (T), em graus Celsius, em função do tempo (t), em horas, é controlada e varia de acordo com a expressão T(t) = – t<sup>2</sup> + 5t + 6, cujo gráfico está representado abaixo.</p>

                    <img src={q38_img} alt="" width="100%" />

                    <p className='quesito'>A temperatura (T) é máxima para o tempo (t), em horas, igual a</p>

                    <input type="radio" name="q38" id="" value="A" required onClick={(e) => { setEstiloQ38("quadrado-questao-verde"), setQ38(e.target.value)}} />
                    <p className='opcao'>2,5</p>

                    <input type="radio" name="q38" id="" value="B" onClick={(e) => { setEstiloQ38("quadrado-questao-verde"), setQ38(e.target.value)}} />
                    <p className='opcao'>3</p>

                    <input type="radio" name="q38" id="" value="C" onClick={(e) => { setEstiloQ38("quadrado-questao-verde"), setQ38(e.target.value)}} />
                    <p className='opcao'>5</p>

                    <input type="radio" name="q38" id="" value="D" onClick={(e) => { setEstiloQ38("quadrado-questao-verde"), setQ38(e.target.value)}} />
                    <p className='opcao'>12</p>

                    <input type="radio" name="q38" id="" value="E" onClick={(e) => { setEstiloQ38("quadrado-questao-verde"), setQ38(e.target.value)}} />
                    <p className='opcao'>12,25</p>

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q39" className="questao-matematica">
                    <h3>Questão 39</h3>

                    <p className='quesito'>39)(D-20) (ENCCEJA) A produção de asfalto de borracha retira dos lixões uma quantidade considerável de pneus, o que é ecologicamente correto. Para pavimentar um quilômetro de uma via com duas pistas com esse tipo de asfalto, são utilizados 500 pneus velhos. O gráfico que representa a quantidade de pneus utilizados (y) por quilômetro pavimentado (x) é</p>
                    <br />

                    <input type="radio" name="q39" id="" value="A" required onClick={(e) => { setEstiloQ39("quadrado-questao-verde"), setQ39(e.target.value)}} />
                    <img src={q39_a} alt="" width="100%" /> <br /><br />

                    <input type="radio" name="q39" id="" value="B" onClick={(e) => { setEstiloQ39("quadrado-questao-verde"), setQ39(e.target.value)}} />
                    <img src={q39_b} alt="" width="100%" /> <br /><br />

                    <input type="radio" name="q39" id="" value="C" onClick={(e) => { setEstiloQ39("quadrado-questao-verde"), setQ39(e.target.value)}} />
                    <img src={q39_c} alt="" width="100%" /> <br /><br />

                    <input type="radio" name="q39" id="" value="D" onClick={(e) => { setEstiloQ39("quadrado-questao-verde"), setQ39(e.target.value)}} />
                    <img src={q39_d} alt="" width="100%" />

                </div>
                {/* =========================================================== */}


                {/* =========================================================== */}
                <div id="q40" className="questao-matematica">
                    <h3>Questão 40</h3>

                    <p className='quesito'>40)(D-03) (ENCCEJA) Uma pessoa que se encontrava em um parque observou a movimentação de um esquilo sobre um dos brinquedos desse parque. A figura indica o percurso feito pelo esquilo, iniciado no ponto A e finalizado no ponto B</p>
                    <br />

                    <img src={q40_img} alt="" width="100%" /> <br /><br />

                    <p className='quesito'>A projeção sobre o plano do chão, feita de forma perpendicular ao solo, do percurso feito pelo esquilo sobre o brinquedo é</p>
                    <br />

                    <input type="radio" name="q40" id="" value="A" required onClick={(e) => { setEstiloQ40("quadrado-questao-verde"), setQ40(e.target.value)}} /> <br />
                    <img src={q40_a} alt="" width="50%" /> <br /><br />

                    <input type="radio" name="q40" id="" value="B" onClick={(e) => { setEstiloQ40("quadrado-questao-verde"), setQ40(e.target.value)}} /> <br />
                    <img src={q40_b} alt="" width="50%" /> <br />

                    <input type="radio" name="q40" id="" value="C" onClick={(e) => { setEstiloQ40("quadrado-questao-verde"), setQ40(e.target.value)}} /> <br />
                    <img src={q40_c} alt="" width="50%" /> <br />

                    <input type="radio" name="q40" id="" value="D" onClick={(e) => { setEstiloQ40("quadrado-questao-verde"), setQ40(e.target.value)}} /> <br />
                    <img src={q40_d} alt="" width="50%" />

                </div>
                {/* =========================================================== */}

                <input type="submit" value="Entregar prova" />
            </form>

        </div>
    )
}

export default CreateProva