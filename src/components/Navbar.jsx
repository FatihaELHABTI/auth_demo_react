import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">Auth System</Link>
      </div>
      <div className="nav-links">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;