import { useState } from "react";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await newRequest.post("/auth/login", {
				username,
				password
			});
			localStorage.setItem("currentUser", JSON.stringify(res.data));
			navigate("/");
		}
		catch (err) {
			setError(err.response.data);
		}
	}

	return (

		<main className="login">
			<h1>Sign in</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Username
					<input
						type="text"
						placeholder="johndoe"
						onChange={(e) => setUsername(e.target.value)} />
				</label>

				<label>
					Password
					<input
						type="password"
						placeholder="your password"
						onChange={(e) => setPassword(e.target.value)} />
				</label>

				<button type="submit">Login</button>
				{error && error}
			</form>
		</main>
	);
}

export default Login;
