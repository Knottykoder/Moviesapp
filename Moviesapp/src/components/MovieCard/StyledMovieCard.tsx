import styled from 'styled-components'

export const MovieContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
`;

export const CoverImg = styled.img`
height: 362px;
object-fit: cover;
`;

export const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;

export const InfoColumn = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
`;

export const MovieInfo = styled.div`
font-size: 16px;
font-weight: 500;
color: black;
// wite-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;
text-transform: capitalize;
`;