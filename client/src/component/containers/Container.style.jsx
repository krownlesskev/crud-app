import styled from "styled-components";

export const Container = styled.div`
    max-height: 750px;
    overflow-y: scroll;
    margin: 5rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #344955;
    box-shadow: 0 5px 10px #111111;
    div input {
        color: black;
        text-align: center;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;