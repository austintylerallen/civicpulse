import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
        />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default connect(null, { login })(Login);
