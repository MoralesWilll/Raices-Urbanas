'use client'
import { FormContent } from "../form/styledForm";
import { colors } from "../../app/GlobalStyles"

interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode
    className?: string    
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
    return (
        <FormContent onSubmit={onSubmit} color={colors.white}>
            {children}
        </FormContent>
    )
}

export default Form;