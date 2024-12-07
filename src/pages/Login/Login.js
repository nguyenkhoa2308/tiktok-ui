import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import LoginForm from '~/components/LoginForm/LoginForm';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Login;
