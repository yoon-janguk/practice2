import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    z-index: 90;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Poster = styled.img`
    width: 250px;
    height: 350px;
    object-fit:cover;
    margin-right: 40px;
`;
const Explain = styled.div`
    color: white;
`;
const Title = styled.div`
    color : white;
`;
const Average = styled.div`
    color : white;
`;
const Overview = styled.div`
    color : white;
    width: 400px;
`;
export function Modal(props){
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/movies");
    };
    return <ModalWrapper onClick = {onClick}>
        <Poster
        src={"https://image.tmdb.org/t/p/w200" + props.poster_path}
        ></Poster>
        <Explain>
        <Title>{props.title}</Title>
        <Average>⭐️{props.vote_average}</Average>
        <Overview>{props.overview}</Overview>
        </Explain>
    </ModalWrapper>
}