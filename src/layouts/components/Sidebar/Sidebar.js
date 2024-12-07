import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import Button from '~/components/Button';
import FollowingAccounts from '~/components/FollowingAccounts';
import { UserContext } from '~/contexts';

const cx = classNames.bind(styles);

function Sidebar({ onOpenLoginModal }) {
    const { user } = useContext(UserContext);

    return (
        <aside className={cx('wrapper')}>
            <Menu user={user}></Menu>
            {user ? (
                <FollowingAccounts />
            ) : (
                <div className={cx('login-container')}>
                    <Button primary large onClick={onOpenLoginModal} className={cx('login-btn')}>
                        Log in
                    </Button>
                </div>
            )}
            <div className={cx('footer-wrapper')}>
                <div className={cx('footer-container')}>
                    <h4 className={cx('footer-text')}>Company</h4>
                    <h4 className={cx('footer-text')}>Program</h4>
                    <h4 className={cx('footer-text')}>Terms &amp; Policies</h4>
                    <span className={cx('copyright')}>© 2024 TikTok</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
