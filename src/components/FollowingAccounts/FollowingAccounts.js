import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';
import { UserContext } from '~/contexts';

const cx = classNames.bind(styles);

function FollowingAccounts() {
    const { user } = useContext(UserContext);
    const [followingAccounts, setFollowingAccounts] = useState([]);

    useEffect(() => {
        const fetchFollowingAccounts = async () => {
            if (user.following && user.following.length > 0) {
                try {
                    const responses = await Promise.all(
                        user.following.map((_id) => fetch(`http://localhost:3001/users?_id=${_id}`)),
                    );
                    const accounts = await Promise.all(responses.map((res) => res.json()));
                    setFollowingAccounts(accounts);
                } catch (error) {
                    console.error('Error fetching following accounts:', error);
                }
            }
        };

        fetchFollowingAccounts();
    }, [user.following]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Following accounts</p>
            {followingAccounts.map((account, index) => (
                <AccountItem key={index} data={account} />
            ))}
        </div>
    );
}

export default FollowingAccounts;
