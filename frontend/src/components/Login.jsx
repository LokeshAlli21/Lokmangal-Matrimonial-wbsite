import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import env from "../env/env";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const login = async (data) => {
        setError("");
        console.log("Submitting login form with data:", data);

        try {
            const response = await fetch(`${env.backendUrl}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Login API Response:", result);

            if (response.ok) {
                localStorage.setItem("authToken", result.token);
                console.log("Token stored in localStorage:", result.token);

                const userData = await fetch(`${env.backendUrl}/api/user`, {
                    headers: { Authorization: `Bearer ${result.token}` },
                }).then((res) => res.json());

                console.log("Fetched user data:", userData);

                if (userData) {
                    dispatch(authLogin(userData));
                    console.log("Dispatching authLogin...");
                    setShowPopup(true); // Show the success popup
                    console.log("Popup should now be visible.");
                    setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
                }
            } else {
                console.log("Login failed:", result.message);
                setError(result.message || "Login failed");
            }
        } catch (err) {
            console.error("Login Error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-10 border border-gray-300 shadow-md">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-gray-800">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-base text-gray-600">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-blue-600 transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label="Email"
                            placeholder="Enter your Email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>

            {/* ✅ Custom Modal without External UI Components */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                        <h2 className="text-xl font-bold">Login Successful 🎉</h2>
                        <p className="mt-2">You will be redirected shortly...</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            onClick={() => setShowPopup(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
