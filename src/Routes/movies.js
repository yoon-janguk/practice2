import { styled } from "styled-components";
import { movies } from "../api";
// 컴포넌트로 쓸려고 하려면 중괄호를 씌우면 안된다
import Card from "../components/card";
import { useMatch} from "react-router-dom";
import {Modal} from "../components/modal";


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export function Movies() {
  const isMatch = useMatch("/movies/:id");
  const theId = 
    isMatch?.params.id &&
    movies.results.find((movie) => movie.id + "" === isMatch.params.id);
  
  return (
    <>
    {theId === undefined ? 
    null : <Modal
    poster_path = {theId.poster_path}
    title = {theId.title}
    overview = {theId.overview}
    vote_average = {theId.vote_average}/> }
    
    <Wrapper>
      {movies.results.map((movie) => (
        <Card
          id = {movie.id}
          overview={movie.overview}
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
          key={movie.id}
        />
      ))}
      {/* movies안에 있는 results 리스트를 map함수를 통해서 돈다. 각 항목의 이름은 movie */}
    </Wrapper>
    </>
  );
}
