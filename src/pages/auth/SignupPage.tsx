import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';

const SignupPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sign Up | Natural Essence Wholesale';
  }, []);

  return (
    <div>
      <AuthForm mode="signup" />
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;