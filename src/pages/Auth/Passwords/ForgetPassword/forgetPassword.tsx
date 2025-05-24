import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgetpassword.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch("https://darkteam.runasp.net/ForgotPasswordEndpoint/ForgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      console.log(data);


      if (res.ok) {
        alert("Check your email to reset your password.");
      } else {
        alert("Something went wrong.");
      }
      navigate('/confirmemail', { replace: true, state: { from: "forgetpassword" } });
    } catch {
      setMessage('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div>

      <div className="forgot-container">
        <div className="forgot-card">
          <h2 className="forgot-title">Forgot Password</h2>
          {message ? (
            <p className="forgot-message">{message}</p>
          ) : (
            <div>
              <p className="forgot-subtitle">Enter your email address and we’ll send you a link to reset your password.</p>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>
                <button type="submit" className="submit-button">Send Reset Link</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
