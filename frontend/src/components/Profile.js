import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const loading = useSelector(state => state.profile.loading);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {profile && (
        <div>
          <p className="mb-2"><strong>Bio:</strong> {profile.bio}</p>
          <p className="mb-2"><strong>Preferences:</strong> {profile.preferences.join(', ')}</p>
          <p className="mb-2"><strong>Social Media:</strong></p>
          <ul>
            {profile.social.twitter && <li className="mb-1">Twitter: {profile.social.twitter}</li>}
            {profile.social.facebook && <li className="mb-1">Facebook: {profile.social.facebook}</li>}
            {profile.social.linkedin && <li className="mb-1">LinkedIn: {profile.social.linkedin}</li>}
            {profile.social.instagram && <li className="mb-1">Instagram: {profile.social.instagram}</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
