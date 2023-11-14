import styled from "styled-components"
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"


export default function SessionsPage() {
    const params = useParams()
    const [inforFilmeSelec, setInforFilmeSelec] = useState([])
    const [listaDeHorarios, setListaDeHorarios] = useState([])


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idFilme}/showtimes`)
        promise.then((resposta) => {
            setInforFilmeSelec(resposta.data)
            setListaDeHorarios(resposta.data.days)
        })
    }, [])
    return (
        <PageContainer>
            Selecione o horário
            <div>
                {listaDeHorarios.map(cadaSessao =>
                    <SessionContainer key={cadaSessao.id} data-test="movie-day">
                        {cadaSessao.weekday} - {cadaSessao.date}
                        <ButtonsContainer >
                            {cadaSessao.showtimes.map((cadaHora) => 

                                <Link to={`/assentos/${cadaHora.id}`} key={cadaHora.id} data-test="showtime">
                                    <button>{cadaHora.name}</button>
                                </Link>
                            )}

                        </ButtonsContainer>
                    </SessionContainer>
                )}

            </div>

            <FooterContainer data-test="footer" >
                <div>
                    <img src={inforFilmeSelec.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{inforFilmeSelec.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        width: 83px;
        height: 43px;
        border-radius: 3px;
        margin-right: 20px;
        background-color: #E8833A;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.02em;
        text-align: center;
        color: #FFFFFF;

    }
    a {
        text-decoration: none;
    }
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