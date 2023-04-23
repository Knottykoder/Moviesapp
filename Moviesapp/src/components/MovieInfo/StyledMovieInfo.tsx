import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: center;
border-bottom: 1px solid lightgray;
`;

export const CoverImg = styled.img`
height: 352px;
object-fit: cover;
`;

export const InfoColumn = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`;

export const MovieNameTitle = styled.span`
font-size: 22px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
text-transform: capitalize;
`;

export const MovieInfoRow = styled(MovieNameTitle)`
font-size: 16px;
font-weight: 500;
margin: 4px 0;
white-space: normal;
& span{
    opacity: 0.5;
}
`;

export const Close = styled.span`
font-size: 16px;
font-weight: 600;
color: black;
background: lightgray;
height: fit-content;
padding: 8px;
border-radius: 50%;
cursor: pointer;
opacity: 0.8;
`;