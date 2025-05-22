import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FireBaseConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <div className="home-container">
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay" />

      <div className="home-box">
        <h2 className="welcome-title">Welcome</h2>
        <h4 className="user-email">{user?.email}</h4>
        <button className="signout-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;
