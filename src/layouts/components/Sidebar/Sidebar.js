import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu from './Menu';

import FollowingAccounts from '~/components/FollowingAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu currentUser={currentUser}></Menu>
            <FollowingAccounts />
        </aside>
    );
}

export default Sidebar;
