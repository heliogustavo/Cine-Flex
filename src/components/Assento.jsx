import styled from "styled-components";
import { useState, useEffect } from 'react';



export default function Assento(props ) {
    const {cadaAssento} = props
    const disponivelOuNao = cadaAssento.isAvailable;
    const [assentosSelecionados, setAssentosSelecionados] = useState([])

    function selecionarAssento(assentoClicadoId) {
         if(!disponivelOuNao) { 
            alert("Este Assento não está disponível")
         }
         else{
            const verificarSelecao = assentosSelecionados.some(cadaAssentoSelecionado => cadaAssentoSelecionado.id === assentoClicadoId.id);
            if(verificarSelecao){
                const novaListaDeSelecionados = assentosSelecionados.filter(cadaAssentoSelecionado => cadaAssentoSelecionado.id !== assentoClicadoId.id)
                setAssentosSelecionados(novaListaDeSelecionados);
            }
            else{
                setAssentosSelecionados([...assentosSelecionados, assentoClicadoId])
            }
        }
    }
    console.log(assentosSelecionados)
    return (
        <SeatItem
            onClick={() => selecionarAssento(cadaAssento.id)}
            key={cadaAssento.id}>
                      {cadaAssento.name}
        </SeatItem>
    )
}


const SeatItem = styled.button`
    border: 1px;
    background-color: "#FBE192";
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`