import {styled} from 'styled-components';
const Text = styled.div`
    font-size:200px;
    color:white;
    font-family: 'KdamThmorPro-Regular'
`;
const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export function Home(){
    return(
        <Wrapper>
            <Text>Home</Text>
        </Wrapper>
    );
}