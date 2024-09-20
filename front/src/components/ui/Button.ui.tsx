'use client'
import React from "react"
import styled from "styled-components"
import { colors } from "../../app/GlobalStyles"

interface StyledProps {
    width?: string
    height?: string
    $bgColor?: string
    color?: string
    margin?: string
    padding?: string
}

interface ButtonProps extends StyledProps {
    type: 'submit' | 'button' | 'reset' 
    label?: string
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const StyledButton = styled.button<StyledProps> `
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    background-color: ${(props) => props.$bgColor || colors.primary};
    color: ${(props) => props.color || colors.secondary};
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "10px"};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    ${(props) => props.disabled && `opacity: 0.5;`}
    &:hover {
        opacity: .8;
        transition: all .5s
    }
    &:disabled {
        cursor: none;
    }
`

const Button: React.FC<ButtonProps> = ({ type, onClick, disabled, children, ...styledProps }) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...styledProps}
        >
            {children}
        </StyledButton>
    )
}

export default Button