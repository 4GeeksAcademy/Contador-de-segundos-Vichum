//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";

let segundos = 0
let decenasSegundos = 0
let centenasSegundos = 0
let milesimasSegundos = 0

setInterval(() => {
    segundos++;
    if (segundos > 9) {
        decenasSegundos += 1
        segundos = 0
    }

if (decenasSegundos > 9) {
    centenasSegundos += 1
    decenasSegundos = 0
    segundos = 0
}

if (centenasSegundos > 9) {
    milesimasSegundos += 1
    centenasSegundos = 0
    decenasSegundos = 0
    segundos = 0
}

if (milesimasSegundos > 9) {
    milesimasSegundos = 0
    centenasSegundos = 0
    decenasSegundos = 0
    segundos = 0
}

    ReactDOM.createRoot(document.getElementById('app')).render(
    <SimpleCounter segundos={segundos} decenasSegundos={decenasSegundos} centenasSegundos={centenasSegundos} milesimasSegundos={milesimasSegundos}/>);
}, 1000);
