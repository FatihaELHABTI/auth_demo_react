import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth.service';
import ensetLogo from '../assets/enset-logo.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await registerUser(formData);
      navigate('/login', { state: { message: 'Registration successful! Please login.' } });
    } catch (err) {
      setError(err.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src={ensetLogo} alt="ENSET Logo" className="auth-logo" />
          <div className="auth-subtitle">
            ECOLE NORMALE SUPÉRIEURE DE L'ENSEIGNEMENT TECHNIQUE DE MOHAMMEDIA
            <br />
            UNIVERSITÉ HASSAN II DE CASABLANCA
          </div>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="login"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Login"
              required
              className="auth-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="auth-input"
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="auth-input"
            />
          </div>
          
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-footer">
          <p>
            <Link to="/login" className="auth-link">Already registered? Click to sign in!!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;