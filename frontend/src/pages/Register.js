import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authActions';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const dispatch = useDispatch();

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={onChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="password2" value={password2} onChange={onChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
