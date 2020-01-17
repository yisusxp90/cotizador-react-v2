import React from 'react';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    background-color: #00838F;
    padding: 1rem;
    text-align: center;
    margin-top: 1rem;
    color: #FFF;
`;

const Resumen = ({datos}) => {
    const {marca, year, plan} = datos;

    if(marca === '' || year === ''  || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año del Automovil: {year}</li>
            </ul>
        </ContenedorResumen>

    );
};

export default Resumen;