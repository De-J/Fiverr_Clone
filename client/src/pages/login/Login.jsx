import { useState } from "react";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

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
		<>
		<main className="login">	
			<div>
				<h1>Sign in</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Username
				<input
					type="text"
					onChange={(e) => setUsername(e.target.value)} />
				</label>

				<label>Password
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)} />
				</label>

				<input type="submit" value="Sign in"/> 
				{error && error}
			</form>
		</main>
		</>
	);
}

export default Login;
