import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Profile.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { SettingsIcon, ShareIcon } from '~/components/Icons';
import TabButtons from './TabButtons';

const cx = classNames.bind(styles);

function Profile() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-container')}>
                <div className={cx('user-avt')}>
                    <Image src={images.avatar} className={cx('img-avt')} />
                </div>
                <div className={cx('user-info')}>
                    <div className={cx('user-identify')}>
                        <h1 className={cx('user-nickname')}>_khoanene</h1>
                        <h2 className={cx('user-full-name')}>Nguyễn Khoa</h2>
                    </div>
                    <div className={cx('button-wrapper')}>
                        <Button primary large>
                            Edit Profile
                        </Button>
                        <Button secondary large>
                            Promote post
                        </Button>
                        <Button secondary onlyIcon leftIcon={<SettingsIcon />} className={cx('icon-btn')} />
                        <Button secondary onlyIcon leftIcon={<ShareIcon />} className={cx('icon-btn')} />
                    </div>
                    <div className={cx('user-decs')}>
                        <h3 className={cx('count-info')}>
                            <div className={cx('number')}>
                                <strong title="following-cout">4</strong>
                                <span className={cx('span-unit')}>Following</span>
                            </div>
                            <div className={cx('number')}>
                                <strong title="followers-cout">11</strong>
                                <span className={cx('span-unit')}>Followers</span>
                            </div>
                            <div className={cx('number')}>
                                <strong title="likes-cout">0</strong>
                                <span className={cx('span-unit')}>Likes</span>
                            </div>
                        </h3>
                        <div className={cx('user-bio')}>Yo, I'm Khoa</div>
                    </div>
                </div>
            </div>
            <div className={cx('user-content')}>
                <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
}

export default Profile;
