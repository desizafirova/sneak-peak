import Form from './Form';
import Input from './Input';
import FormRowVertical from './FormRowVertical';
import styled from 'styled-components';
import Logo from './Logo';
import { useLogin } from '../hooks/useLogin';
import SpinnerMini from './SpinnerMini';
import { useState } from 'react';

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

const FormContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
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
    <Form type="modal" onSubmit={handleLogin}>
      <Logo />
      <FormContainer>
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
      </FormContainer>
      <FormRowVertical>
        <LoginButton type="submit" disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : 'Login'}
        </LoginButton>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
