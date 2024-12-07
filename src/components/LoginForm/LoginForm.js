import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './LoginForm.module.scss';
import Button from '../Button';
import { HiddenPasswordIcon, ShowPasswordIcon } from '../Icons';
import { UserContext } from '~/contexts';

const cx = classNames.bind(styles);

function LoginForm({ loginSuccess }) {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:3001/users?email=${email}&password=${password}`);
            const data = await res.json();
            if (res.ok) {
                const userData = data[0];
                login(userData);
                loginSuccess();
                navigate('/');
                setIsError(false);
            } else {
                // setMessage('Tên đăng nhập hoặc mật khẩu không đúng!');
                setIsError(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        fetchData();
    };

    return (
        <div className={cx('login-container')}>
            <h2 className={cx('login-title')}>Login</h2>
            <div className={cx('login-desc')}>
                <span className={cx('title')}>Email or username</span>
            </div>
            <form className={cx('login-form')}>
                <div className={cx('input-group')}>
                    <input
                        className={cx('input-container')}
                        type="text"
                        placeholder="Email or username"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                    />
                    <div className={cx('icon-container')}>
                        <i className={cx('icon')}></i>
                    </div>
                </div>
                <div className={cx('input-group')}>
                    <input
                        className={cx('input-container')}
                        type={isShowPassword ? 'text' : 'password'}
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                    <div className={cx('icon-container')} onClick={() => setIsShowPassword(!isShowPassword)}>
                        <i className={cx('icon')}>{!isShowPassword ? <HiddenPasswordIcon /> : <ShowPasswordIcon />}</i>
                    </div>
                </div>
                {isError && (
                    <div className={cx('text-container')}>
                        <span role="status">Username or password doesn't match our records. Try again.</span>
                    </div>
                )}
                <Link to="/profile" className={cx('link')}>
                    Forgot password?
                </Link>
                <Button
                    primary
                    className={cx('login-btn', {
                        disabled: !email || !password,
                    })}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
