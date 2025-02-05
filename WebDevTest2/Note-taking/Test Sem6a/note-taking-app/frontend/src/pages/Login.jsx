import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await login({ email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            navigate("/");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">Login</h1>
            <input className="border p-2 w-full my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="border p-2 w-full my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="bg-blue-500 text-white p-2">Login</button>
        </div>
    );
}
