import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SessionForm.css';

import { login, clearSessionErrors } from '../../store/session';

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(state => state.errors.session);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    const setState = field === 'email' ? setEmail : setPassword;
    return e => setState(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })); 
  }

  return (
    <form className="session-form" id="login-form" onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <div className='error-container'>
        <label className='input-container'>
          <p>Email</p>
          <input type="text"
            value={email}
            onChange={update('email')}
            placeholder="Email"
          />
        </label>
        <div className="errors">{errors?.email}</div>
      </div>
      <div className='error-container'>
        <label className='input-container'>
          <p>Password</p>
          <input type="password"
            value={password}
            onChange={update('password')}
            placeholder="Password"
          />
        </label>
        <div className="errors">{errors?.password}</div>
      </div>
      <input id="login-form-bttn"
        type="submit"
        value="Log In"
        disabled={!email || !password}
      />
    </form>
  );
}

export default LoginForm;