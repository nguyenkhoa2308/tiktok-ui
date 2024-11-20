import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

import styles from './FollowingAccounts.module.scss';
import Image from '~/components/Image';
import { BlueVCheck } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        // <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        //     <div className={cx('account-item')}>
        //         <div className={cx('avatar-container')}>
        //             <Image className={cx('img-avatar')} src={data.avatar} alt={data.full_name} />
        //         </div>
        //         <div className={cx('info')}>
        //             <h4 className={cx('item-title')}>
        //                 {data.nickname}
        //                 {data.tick && <BlueVCheck className={cx('check-icon')} />}
        //             </h4>
        //             <p className={cx('item-decs')}>{data.full_name}</p>
        //         </div>
        //     </div>
        // </Link>
        <div className={cx('account-item')}>
            <div className={cx('avatar-container')}>
                <Image className={cx('img-avatar')} src={images.followingAvt} alt="Em iu" />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('item-title-wrapper')}>
                    <span className={cx('item-title')}>ninnguyxn</span>
                    <BlueVCheck className={cx('check-icon')} />
                </h4>
                <p className={cx('item-decs')}>Ninne</p>
            </div>
        </div>
    );
}

export default AccountItem;
