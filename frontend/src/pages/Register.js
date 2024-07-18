import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />
      </div>
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
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={e => onChange(e)}
        />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default connect(null, { register })(Register);
