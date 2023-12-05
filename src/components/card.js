import { styled } from "styled-components";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Block = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 13px;
  height: 420px;
  text-align: center;
`;
const Text = styled.div`
  background-color: rgb(0,0,0,0.3);
  height: 100%;
  padding-top:15px;

`;
const InText = styled.div`
  color: white;
  font-family: 'Maplestory OTF Light.otf';
  font-size: 19px;
`;
const Poster = styled.img`
  width: 250px;
  height: 350px;
  object-fit:cover;
`;
const Overview = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding:20px;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-x: scroll;
  font-family: 'Maplestory OTF Light.otf';
`;
export default function Card(props) {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const whileLeave = () => {
      setIsVisible(false);
    };
    const whileHover = () => {
      setIsVisible(true);
};
const onCardClick = (id) => {
  navigate(`/movies/${props.id}`)
};
  return (
    <Block 
          onMouseLeave={whileLeave} 
          onMouseOver={whileHover}
          onClick={onCardClick}>
      {isVisible ? <Overview>{props.overview}</Overview> : null}
      <Poster
        src={"https://image.tmdb.org/t/p/w200" + props.poster_path}
      ></Poster>
      <Text>
        <InText>{props.title}</InText>
        <InText>⭐️{props.vote_average}</InText>
      </Text>
    </Block>
  );
}
