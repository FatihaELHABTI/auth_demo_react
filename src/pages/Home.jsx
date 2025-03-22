import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="home-container">
      <h1>Welcome to Auth System</h1>
      <p>A simple authentication system built with React and JSON Server</p>
      
      {!isAuthenticated ? (
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
        </div>
      )}
    </div>
  );
};

export default Home;