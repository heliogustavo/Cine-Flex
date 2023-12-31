import styled from "styled-components"
import { Link } from "react-router-dom"


export default function SuccessPage(props) {
    const { movie, date, session, seats, nome, cpf } = props.inforReservaFeita;
    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{movie}</p>
                <p>{date} - {session}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {seats.map(s => <p key={s.id}>{s}</p>
                )}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {nome}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>
            <Link to="/">
                <button data-test="go-home-btn">Voltar para Home</button>
            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
background-color: #E8833A;
margin-top: 50px;
width: 225px;
height: 42px;
border-radius: 3px;
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.04em;
text-align: center;
color: #FFFFFF;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`