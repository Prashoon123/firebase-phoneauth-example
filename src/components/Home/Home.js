import "./Home.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="home">
      <h3>Your phone number is: {user?.phoneNumber}</h3>
      <button onClick={() => auth.signOut()} className="home__logout">
        Logout
      </button>
      <button onClick={() => user?.delete()} className="home__deleteAccount">
        Delete Account
      </button>
    </div>
  );
}

export default Home;
