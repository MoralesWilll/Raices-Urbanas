'use client'
import React from "react"
import styled from "styled-components"
import { colors } from "../../app/GlobalStyles"

interface InputProps extends StylesProps {
    type: string
    id: string
    name: string
    placeholder: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    className?: string
    required?: boolean
}

interface StylesProps {
    width?: string
    $padding?: string
    margin?: string
}

const InputField = styled.input<StylesProps>`
    background-color: ${colors.bluegray};
    color: ${colors.white};
    padding: ${(props) => props.$padding || "0.75rem"};
    border: none;
    border-left: 1px solid ${colors.primary};
    border-bottom: 2px solid ${colors.secondary};
    border-radius: 5px;
    transition: border-color 0.3s ease;
    &:focus {
        border-color: ${colors.primary};
    }
    &:focus-visible {
        outline: none;
        border-color: ${colors.primary};
    }
`

const Input: React.FC<InputProps> = ({ type, id, name, placeholder, value, onChange, disabled, required, ...styledProps}) => {
    return (
        <InputField
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            {...styledProps}
        />
    )
}

export default Input