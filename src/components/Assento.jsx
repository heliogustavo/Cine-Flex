import styled from "styled-components";
import { useState, useEffect } from 'react';


export default function Assento({cadaAssento, assentoSelecionado, setAssentoSelecionado}) {
    const [assentoFoiSelecionado, setAssentoFoiSelecionado] = useState(null)
    const disponivelOuNao= cadaAssento.isAvailable;
    const [cor, setCor] = useState("#C3CFD9");

        function selecionarAssento(){
            if (assentoFoiSelecionado){
                setCor("#C3CFD9")
            }
            if(disponivelOuNao === true){
                setCor("#1AAE9E")
                setAssentoFoiSelecionado(true)
                setAssentoSelecionado(cadaAssento.id)
                
            }
          
            else {
                alert("Este Assento não está disponível")
        }
         
        }

    return(
    <SeatItem onClick={()=>selecionarAssento()} cor={cor} disponivelOuNao={disponivelOuNao} key={cadaAssento.id}>{cadaAssento.name}</SeatItem>
    )
}



const SeatItem = styled.button`
    border: 1px;        
    background-color: ${(props)=> props.disponivelOuNao ? props.cor : "#FBE192"};
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