import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid #26C6DA;
`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de Seguro</Mensaje>
            : <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
    );
}

export default Resultado;