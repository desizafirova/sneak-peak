import Input from './Input';
import FormRowVertical from './FormRowVertical';
import styled from 'styled-components';

import { useLogin } from '../hooks/useLogin';
import SpinnerMini from './SpinnerMini';
import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginButton = styled.button`
  background: var(--color-rose-500);
  color: var(--color-rose-100);
  border: none;
  border-radius: 3px;
  align-self: flex-start;
  padding: 1.2rem 2.4rem;
  margin: 0 auto;

  &:hover {
    background-color: var(--color-rose-600);
  }
`;

const FormContainer = styled.form`
  width: 50rem;
  padding: 3rem;
  border: 1px solid var(--color-rose-100);
  border-radius: var(--border-radius-md);
  margin: 15rem auto;
`;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <FormContainer onSubmit={handleLogin}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <LoginButton type="submit" disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : 'Login'}
        </LoginButton>
      </FormRowVertical>
    </FormContainer>
  );
}

LoginForm.propTypes = {
  closeModal: PropTypes.func,
};

export default LoginForm;
