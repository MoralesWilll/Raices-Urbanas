'use client'
import React from "react"
import styled from "styled-components"
import { colors } from "../../app/GlobalStyles"

interface SelectProps extends StylesProps {
    id: string
    name: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    disabled?: boolean
    className?: string
    required?: boolean
}

interface StylesProps {
    width?: string
    $padding?: string
    margin?: string
}

const SelectField = styled.select<StylesProps>`
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

const options = [
    { value: "comprador", label: "Comprador" },
    { value: "vendedor", label: "Vendedor" },
]

const Select: React.FC<SelectProps> = ({ id, name, value, onChange, disabled, required, ...styledProps }) => {
    return (
        <SelectField
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            {...styledProps}
        >
            <option value="" hidden disabled>Seleccionar Rol</option> 
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SelectField>
    )
}

export default Select
