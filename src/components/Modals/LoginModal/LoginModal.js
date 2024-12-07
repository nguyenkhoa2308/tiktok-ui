import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './LoginModal.module.scss';
import LoginForm from '~/components/LoginForm/LoginForm';
import { CloseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function LoginModal({ onClose }) {
    const handleLoginSuccess = () => {
        onClose(); // Đóng modal
    };

    return (
        <div className={cx('modal-container')}>
            <div className={cx('modal-mask')}></div>
            <div className={cx('center-wrapper')}>
                <div className={cx('content-container')}>
                    <div className={cx('modal-content')}>
                        <div className={cx('page-wrapper')}>
                            <div className={cx('back-btn')}></div>
                            <LoginForm loginSuccess={handleLoginSuccess} />
                        </div>
                        <div className={cx('bottom-container')}>
                            <div className={cx('bottom-text')}>Don’t have an account? </div>
                            <Link to="/login">
                                <span className={cx('span-text')}>Sign up</span>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('close-wrapper')} onClick={onClose}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
