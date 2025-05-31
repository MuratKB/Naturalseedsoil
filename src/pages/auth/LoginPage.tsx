import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sign In | Natural Essence Wholesale';
  }, []);

  return (
    <div>
      <AuthForm mode="login" />
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;