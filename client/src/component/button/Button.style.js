import styled from 'styled-components';

export const Button = styled.button`
    margin: 1rem;
	width: 140px;
    height: 40px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    border: none;
    border-radius: 30px;
    transition: .3s;
    font-size: 18px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: .3s;
    }
`;
