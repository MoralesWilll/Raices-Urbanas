import { apiUrl } from "./apiUrl";
import { UserData } from "../interfaces/IDataUser";

export const register = async (user: UserData): Promise<UserData> => {
    try {
        const response = await fetch(`${apiUrl}/RaicesUrbanas/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })

        if (!response.ok) {
            throw new Error("Server Error")
        }

        const data: UserData = await response.json()
        return data
    } catch (error) {
        console.error("Error:", error)
        throw new Error("Error al registrar usuario")
    }
}