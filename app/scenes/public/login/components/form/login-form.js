import { navigateTo } from "../../../../../Router.js";
import { formValidator } from "../../../../../helpers";
import style from "./login-form.css";

export async function LoginFormComponent() {
    const root = document.getElementById("root");

    root.innerHTML = `
      <form id="loginForm" class="${style.form}">
        <h2>Login</h2>
        <label for="email" class="${style.label}">Email:</label>
        <input type="text" id="email" name="email" autocomplete="email" class="${style["input-email"]}">
        <label for="password" class="${style.label}">Password:</label>
        <input type="password" id="password" name="password" autocomplete="current-password" class="${style["input-password"]}">
        <button type="submit" class="${style["button-send"]}">Login</button>
      </form>
    `;

    const form = document.getElementById("loginForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // previene el comportamiento por default que es, recargar la pagina
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!formValidator(email, password)) {
            alert("Please fill in all fields");
            return;
        }
        const token = await findUser(email, password);
        if (token) {
            localStorage.setItem("token", token);
            console.log("True");
            navigateTo("/home");
        } else {
            alert("Invalid credentials");
        }
    });
}

async function login(email, password) {
    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Error ${response.status}: ${errorMessage}`);
        }

        const data = { token: "mi token" };
        return data.token;
    } catch (error) {
        console.error("Login failed:", error);
        return null;
    }
}

async function findUser(username, password) {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
}

