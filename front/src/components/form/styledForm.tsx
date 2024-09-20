import styled from "styled-components";
import { colors } from "../../app/GlobalStyles"

interface StyledContainerProps {
    display?: string;
    $fC?: string;
}

export const Container = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.$fC || 'row'};
    background-color: ${colors.white};
    transition: background-color 0.3s ease-in-out;
    height: 100vh;
    `


export const ContainerForm = styled.div<{width?: string, height?: string}>`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1rem;
    width: 50%;
    padding: 6rem;
    background-color: ${colors.secondary};
    
    h1 {
        color: ${colors.white};
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        border-top: 1px solid ${colors.secondary};
        border-bottom: 1px solid ${colors.secondary};
    }

    @media (width <= 768px) {
        padding: 3rem;
        width: 100%;
    }

    @media (width <= 480px) {
        padding: 1rem;
    }
    `

export const GroupTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.white};

    h1 {
        padding: 0;
    }
`

export const BackgroundForm = styled.div<{width?: string, height?: string}>`
    width: 50%;
    height: 100vh;
    background-image: url('/assets/img/arrendatario-servicio.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (width <= 768px) {
        display: none;
    }
`

export const FormContent = styled.form<{$bg?: string, color?: string}>`
    display: flex;
    flex-direction: column;
    gap: 2.625rem;
    color: ${(props) => props.color || colors.black};
    p {
        text-align: center;
    }
    a {
        font-style: italic;
        color: ${colors.white};
        text-decoration: none;
        &:hover {
            color: ${colors.primary};
        }
    }
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TextError = styled.span`
    background-color: red;
    color: white;
    text-align: center;
    padding: 0.75rem;
    border-radius: 4px;
`