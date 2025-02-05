import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">Note App</h1>
            <div>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
    );
}
