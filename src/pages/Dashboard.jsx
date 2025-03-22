import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import ensetLogo from '../assets/enset-logo.jpg';

const Dashboard = () => {
  const { user, logout } = useAuth();
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <img src={ensetLogo} alt="ENSET Logo" className="sidebar-logo" />
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/dashboard" className="sidebar-link active">
              <i className="icon">📊</i> Dashboard
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/products" className="sidebar-link">
              <i className="icon">📦</i> Products
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/upload" className="sidebar-link">
              <i className="icon">📤</i> Upload File
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button onClick={logout} className="logout-button">Logout</button>
        </div>
        
        <div className="dashboard-welcome">
          <h2>Welcome, {user.name}!</h2>
          <p>You've successfully logged in to the ENSET system.</p>
        </div>
        
        <div className="dashboard-info">
          <div className="info-card">
            <h3>Your Account Information</h3>
            <ul>
              <li><strong>Name:</strong> {user.name}</li>
              <li><strong>Email:</strong> {user.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;