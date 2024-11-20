import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import { BlueVCheck } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <div className={cx('avatar-container')}>
                <Image className={cx('img-avatar')} src={data.avatar} alt={data.full_name} />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('item-title')}>
                    {data.nickname}
                    {data.tick && <BlueVCheck className={cx('check-icon')} />}
                </h4>
                <p className={cx('item-decs')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
