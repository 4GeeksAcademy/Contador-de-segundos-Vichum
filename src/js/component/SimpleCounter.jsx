import React from 'react';

const SimpleCounter = ({ segundos, decenasSegundos, centenasSegundos, milesimasSegundos }) => {
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Contador de segundos</h1>

            <div className="row justify-content-center border border-primary">
                <div className="bg-dark rounded p-3 mx-2 text-light col-1">
                    <h1>{milesimasSegundos}</h1>
                </div>
                <div className="bg-dark rounded p-3 mx-2 text-light col-1">
                    <h1>{centenasSegundos}</h1>
                </div>
                <div className="bg-dark rounded p-3 mx-2 text-light col-1">
                    <h1>{decenasSegundos}</h1>
                </div>
                <div className="bg-dark rounded p-3 mx-2 text-light col-1">
                    <h1>{segundos}</h1>
                </div>

            </div>
        </div>
    );
};

export default SimpleCounter