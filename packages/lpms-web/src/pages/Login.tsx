import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { useAppState } from '../store';
import { PageWrapper } from './PageWrapper';

export const Login = () => {
  const navigate = useNavigate();
  const { isConnecting, authentication } = useAppState();

  useEffect(() => {
    if (authentication.token !== undefined && authentication.timestamp < Date.now() / 1000 - 30 * 60) {
      navigate(-1)
    }
  }, [navigate, authentication])

  return (
    <PageWrapper>
      {!isConnecting &&
        <LoginForm />
      }
      <a href="https://heroku.com/deploy?template=https://github.com/bobetbat/win-stays/tree/lpms-cicd">
        <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy" />
      </a>
    </PageWrapper>
  );
};

