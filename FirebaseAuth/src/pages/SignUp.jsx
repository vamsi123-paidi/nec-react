import { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/FireBaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);
      alert("Account created! Please log in.");
      navigate("/signin");
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
        <h2 className="welcome-title text-primary">Sign Up</h2>
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
        <button className="signout-btn bg-primary" onClick={handleSignup}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
