import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const NavigationBar = styled.div`
    background-color: aquamarine;
    filter: brightness(0.7);
    height: 30px;
    margin: 0px;
    padding:10px 0px;
    position:sticky;
    top:0;
    z-index:1;
  
`;
const Study = styled.span`
  line-height:30px;
  font-size: 30px;
  margin-left: 50px;
  font-family: 'KdamThmorPro-Regular';
`;
const InNavigationBar = styled.span`
    line-height:30px;
    font-size: 20px;
    margin-left: 50px;
    font-family:'Maplestory OTF Light.otf';
    vertical-align:middle;  
`;
export function Nav() {
  const navigate = useNavigate();
  const onClick = (r) => {
    navigate(`/${r}`);
  };
  return (
    <NavigationBar>
      <Study>
        99Study
        <InNavigationBar onClick={() => onClick("")}>Home</InNavigationBar>
        <InNavigationBar onClick={() => onClick("movies")}>Movie</InNavigationBar>
        <InNavigationBar onClick={() => onClick("tv")}>Tv Program</InNavigationBar>
      </Study>
      
    </NavigationBar>
  );
}
