import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Profile.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { BlueVCheck, SettingsIcon, ShareIcon } from '~/components/Icons';
import TabButtons from './TabButtons';

const cx = classNames.bind(styles);

function Profile() {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    const cleanUsername = username.startsWith('@') ? username.slice(1) : username;

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/users?username=${cleanUsername}`);
            const data = await response.json();
            setUserData(data[0]);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [username]);

    if (!userData) {
        return <div>Loading...</div>; // Hiển thị loading khi đang lấy dữ liệu
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-container')}>
                <div className={cx('user-avt')}>
                    <Image src={userData.profilePhoto} className={cx('img-avt')} />
                </div>
                <div className={cx('user-info')}>
                    <div className={cx('user-identify')}>
                        <h1 className={cx('user-nickname')}>{userData.username}</h1>
                        {userData.verified ? <BlueVCheck width="2rem" height="2rem" /> : <Fragment />}
                        <h2 className={cx('user-full-name')}>{userData.name}</h2>
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
                                <strong title="following-count">{userData.following.length}</strong>
                                <span className={cx('span-unit')}>Following</span>
                            </div>
                            <div className={cx('number')}>
                                <strong title="followers-count">{userData.followers.length}</strong>
                                <span className={cx('span-unit')}>Followers</span>
                            </div>
                            <div className={cx('number')}>
                                <strong title="likes-count">{userData.totalLikes}</strong>
                                <span className={cx('span-unit')}>Likes</span>
                            </div>
                        </h3>
                        <div className={cx('user-bio')}>{userData.description}</div>
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
