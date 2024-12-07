import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import LoginModal from '~/components/Modals/LoginModal';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };
    return (
        <div className={cx('wrapper')}>
            <Header onOpenLoginModal={openLoginModal} />
            <div className={cx('container')}>
                <Sidebar onOpenLoginModal={openLoginModal} />
                <div className={cx('content')}>{children}</div>
            </div>
            {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
