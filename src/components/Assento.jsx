import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { coresAssento } from './constants/colors';

export default function Assento(props) {
  const { cadaAssento } = props;
  const {assentosSelecionados, setAssentosSelecionados} = props;
  const disponivelOuNao = cadaAssento.isAvailable;
  const [status, setStatus] = useState('disponivel');

  useEffect(() => {
    const verificarSelecao = assentosSelecionados.some(
      (cadaAssentoSelecionado) =>
        cadaAssentoSelecionado.id === cadaAssento.id
    );

    if (verificarSelecao) {
      setStatus('selecionado');
    } else {
      if (disponivelOuNao) {
        setStatus('disponivel');
      } else {
        setStatus('indisponivel');
      }
    }
  }, [assentosSelecionados, cadaAssento.id, disponivelOuNao]);

  function selecionarAssento(assentoClicadoId) {
    const verificarSelecao = assentosSelecionados.some(
      (cadaAssentoSelecionado) =>
        cadaAssentoSelecionado.id === assentoClicadoId.id
    );
    const novaListaDeSelecionados = assentosSelecionados.filter(
      (cadaAssentoSelecionado) =>
        cadaAssentoSelecionado.id !== assentoClicadoId.id
    );

    if (!disponivelOuNao) {
      alert('Este Assento não está disponível');
    } else {
      if (verificarSelecao) {
        setAssentosSelecionados(novaListaDeSelecionados);
      } else {
        setAssentosSelecionados([...assentosSelecionados, assentoClicadoId]);
      }
    }
  }

  return (
    <SeatItem
      onClick={() => selecionarAssento(cadaAssento)}
      key={cadaAssento.id}
      status={status}
      coresAssento={coresAssento}
    >
      {cadaAssento.name}
    </SeatItem>
  );
}

const SeatItem = styled.button`
  border: 1px solid ${(props) => props.coresAssento[props.status].borda};
  background-color: ${(props) => props.coresAssento[props.status].corDeFundo};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: 'Roboto';
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;