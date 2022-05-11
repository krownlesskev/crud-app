import styled from 'styled-components';

export const Button = styled.button`
    margin: 1rem;
	width: 100px;
    height: 25px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    border: 1px solid black;
    border-radius: 10px;
    transition: .3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: .3s;
    }
`;
