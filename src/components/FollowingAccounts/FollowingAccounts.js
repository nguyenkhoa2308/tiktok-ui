import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Following accounts</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
}

export default FollowingAccounts;
