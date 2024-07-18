import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, getCurrentProfile } from '../actions/profileActions';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    bio: '',
    preferences: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: ''
  });

  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());

    if (profile) {
      setFormData({
        bio: profile.bio || '',
        preferences: profile.preferences.join(', ') || '',
        twitter: profile.social?.twitter || '',
        facebook: profile.social?.facebook || '',
        linkedin: profile.social?.linkedin || '',
        instagram: profile.social?.instagram || ''
      });
    }
  }, [dispatch, profile]);

  const { bio, preferences, twitter, facebook, linkedin, instagram } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createProfile(formData));
  };

  return (
    <form className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md" onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Bio</label>
        <textarea className="w-full p-2 border border-gray-300 rounded" name="bio" value={bio} onChange={onChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Preferences</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="preferences" value={preferences} onChange={onChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Twitter</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="twitter" value={twitter} onChange={onChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Facebook</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="facebook" value={facebook} onChange={onChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">LinkedIn</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="linkedin" value={linkedin} onChange={onChange} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Instagram</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="text" name="instagram" value={instagram} onChange={onChange} />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700" type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
