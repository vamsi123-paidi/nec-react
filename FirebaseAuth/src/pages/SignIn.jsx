import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/FireBaseConfig";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="home-container">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
      <div className="home-box">
        <h2 className="welcome-title">Sign In</h2>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signout-btn" onClick={handleSignin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
