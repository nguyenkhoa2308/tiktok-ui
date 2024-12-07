import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './FollowingAccounts.module.scss';
import Image from '~/components/Image';
import { BlueVCheck } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data[0].username}`} className={cx('account-wrapper')}>
            <div className={cx('account-item')}>
                <div className={cx('avatar-container')}>
                    <Image className={cx('img-avatar')} src={data[0].profilePhoto} alt={data[0].name} />
                </div>
                <div className={cx('info')}>
                    <h4 className={cx('item-title')}>
                        {data[0].username}
                        {data[0].verified && <BlueVCheck className={cx('check-icon')} />}
                    </h4>
                    <p className={cx('item-decs')}>{data[0].name}</p>
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;
