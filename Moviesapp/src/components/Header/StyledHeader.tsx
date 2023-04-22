import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 flex-direction: column;
`;

export const Head = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: black;
color: white;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;

export const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const MovieLogo =styled.img`
width: 48px;
height: 48px;
margin: 15px;
`;