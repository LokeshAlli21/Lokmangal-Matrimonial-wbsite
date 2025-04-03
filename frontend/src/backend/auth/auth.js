// import env from "../env/env";

class AuthService {
    constructor() {
        // this.baseUrl = env.backendUrl; // Use your backend URL from env
        this.baseUrl =  "http://localhost:5000"; // Use your backend URL from env
    }

    // Create Account
    async createAccount({ email, password, name }) {
        try {
            const response = await fetch(`${this.baseUrl}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name }),
            });

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            const userAccount = await response.json();
            return this.login({ email, password }); // Auto login after registration
        } catch (error) {
            console.error("AuthService CreateAccount Error:", error);
            throw error;
        }
    }

    // Login
    async login({ email, password }) {
        try {
            const response = await fetch(`${this.baseUrl}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await response.json();
            localStorage.setItem("authToken", data.token); // Store token
            return data;
        } catch (error) {
            console.error("AuthService Login Error:", error);
            throw error;
        }
    }

    // Get Current User
    async getCurrentUser() {
        try {
            const token = localStorage.getItem("authToken");
            if (!token) return null;

            const response = await fetch(`${this.baseUrl}/api/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Unauthorized");
            }

            return await response.json();
        } catch (error) {
            console.error("AuthService GetUser Error:", error);
            return null;
        }
    }

    // Logout
    async logout() {
        try {
            localStorage.removeItem("authToken"); // Remove token from storage
            return { message: "Logged out successfully" };
        } catch (error) {
            console.error("AuthService Logout Error:", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
