import styled from 'styled-components';

export const Boxes = styled.div`
    border: 2px solid black;
    padding: 5px;
    border-radius: 50px;
    text-align: center;
    margin: 20px;
    background-color: ${({isRed}) => isRed ? 'white' : 'rgba(221, 176, 183, 0.938)'};
`
export const PrevNext = styled.div`
    height: 75px;
    margin: 5px 7px 7px 7px;
    display: flex;
    justify-content: space-around;
`

export const ButPrevNext = styled.button`
    width: 100%;
    font-size: 18px;
`