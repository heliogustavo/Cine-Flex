import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import Assento from "../../components/Assento"


export default function SeatsPage() {
    const params = useParams()
    const [listaAssentos, setListaAssentos] = useState([])
    const [assentoSelecionado, setAssentoSelecionado] = useState([])
    const [dadosAssentos, setDadosAssentos] = useState(null);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const cor = {
        indisponivel: ' #FBE192',
        disponivel: '#C3CFD9',
        selecionado: '#1AAE9E',
    };

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`)
        promise.then((resposta) => {
            setListaAssentos(resposta.data.seats)
            setDadosAssentos(resposta.data)

            
        }
        )

    }, [])
    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {listaAssentos.map(cadaAssento =>
                    <Assento cadaAssento={cadaAssento} assentoSelecionado={assentoSelecionado} setAssentoSelecionado={setAssentoSelecionado} key={cadaAssento.id}></Assento>
                )}

            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircleSelecionado theme={cor} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircleDisponivel theme={cor} />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircleIndisponivel theme={cor} />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            {dadosAssentos ?

                <FooterContainer>

                    <div>
                        <img src={dadosAssentos.movie.posterURL} alt="poster" />
                    </div>
                    <div>
                        <p>{dadosAssentos.movie.title}</p>
                        <p>{dadosAssentos.day.weekday} - {dadosAssentos.day.date}</p>
                    </div>
                </FooterContainer>
                :
                <></>
            }

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
        width: 225px;
height: 42px;
border-radius: 3px;
background-color: #E8833A;
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.04em;
text-align: center;
color: #FFFFFF;
    }
    input {
        width: 327px;
        height: 51px;
        border-radius: 3px;
        border: 1px;
        font-family: Roboto;
font-size: 18px;
font-style: italic;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: #AFAFAF;
border: 1px solid #D4D4D4
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircleSelecionado = styled.div`
    border: 1px #0E7D71;         // Essa cor deve mudar
    background-color: #1AAE9E;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircleDisponivel = styled.div`
    border: 1px  #7B8B99;         // Essa cor deve mudar
    background-color: #C3CFD9;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircleIndisponivel = styled.div`
    border: 1px #F7C52B;         // Essa cor deve mudar
    background-color:   #FBE192;    // Essa cor deve mudar 
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;

`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
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
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`