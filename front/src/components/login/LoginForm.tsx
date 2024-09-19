"use client"

import React from "react"
import { useState } from "react"
import { UserData, UserLogin } from "@/interfaces/IDataUser"
import Form from "@/components/form/Form"
import Label from "@/components/ui/Label.ui"
import Input from "@/components/ui/Input.ui"
import InputPassword from "@/components/ui/InputPassword.ui"
import Button from "@/components/ui/Button.ui"
import Loader from "@/components/ui/Loader.ui"
import { Container, ContainerForm, InputContent, TextError, BackgroundForm, GroupTitle } from "@/components/form/styledForm"
import Link from "next/link"
import { colors } from "@/app/GlobalStyles"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { login } from "@/api/auth"
import { validateEmail } from "@/utils/validators"


const initialState: UserLogin = {
    username: "",
    password: "",
}


const Login: React.FC = () => {
    const [user, setUser] = useState<UserLogin>(initialState)
    const [error, setError] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        if (!validateEmail(user.username)) {
            setError("Ingrese un correo electrónico válido")
            setIsLoading(false)
            return
        }

        try {
            const userData = await login(user)

            if (!userData) {
                setError("Credenciales incorrectas")
            } else if (userData.password === user.password) {
                console.log("Login successfull!")
                setUser(initialState)
            } else {
                setError("Contraseña incorrecta")
            }
            
        } catch (error) {
            console.error('Error:', error)
            setError('Error')
        } finally {
            setIsLoading(false)
        }
        console.log(user)
        setUser(initialState)
    }

    return (
        <Container>
            <ContainerForm>
                <GroupTitle>
                    <h1>Iniciar Sesión</h1>
                    <span>Para continuar</span>
                </GroupTitle>
                <Form onSubmit={handleSubmit}>
                    <InputContent>
                        <Label label="Usuario" for="username" />
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Usuario"
                            value={user.username}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                        />
                    </InputContent>
                    <InputContent>
                        <Label label="Contraseña" for="password" />
                        <InputPassword
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={user.password}
                            onChange={handleChange}
                            $padding="1rem"
                            required
                            icon={
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash color={colors.white} /> : <FaEye color={colors.white} />}
                                </span>
                            }
                        />
                    </InputContent>
                    {error && <TextError>{error}</TextError>}
                    <Button type="submit" disabled={user.username === "" || user.password === ""} $bgColor={colors.white}>
                        {isLoading ? (
                            <Loader />
                        ): (
                            <span>Ingresar</span>
                        )}
                    </Button>
                    <p>¿No tienes una cuenta? <Link href="/pages/register">Registrarse</Link></p>
                </Form>
            </ContainerForm>
            <BackgroundForm />
        </Container>
    )
}

export default Login