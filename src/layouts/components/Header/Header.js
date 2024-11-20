import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    AnalyticsIcon,
    CreatorToolsIcon,
    DarkModeIcon,
    FeedBackIcon,
    GetCoinsIcon,
    InboxIcon,
    LanguageIcon,
    LiveCreatorHubIcon,
    LiveStudioIcon,
    LogOutIcon,
    PlusIcon,
    ProfileIcon,
    PromotePostIcon,
    SettingsIcon,
} from '~/components/Icons';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreatorToolsIcon />,
        title: 'Creator tools',
        children: {
            title: 'Creator tools',
            data: [
                {
                    // icon: {},
                    icon: <LiveCreatorHubIcon />,
                    title: 'LIVE Creator Hub',
                },
            ],
        },
    },
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedBackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    title: 'Auto',
                    value: 'auto',
                },
                {
                    title: 'Dark mode',
                    value: 'darkMode',
                },
                {
                    title: 'Light mode',
                    value: 'lightMode',
                },
            ],
        },
    },
];

const USER_MENU = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <GetCoinsIcon />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <CreatorToolsIcon />,
        title: 'Creator tools',
        children: {
            title: 'Creator tools',
            data: [
                {
                    icon: <AnalyticsIcon />,
                    title: 'View Analytics',
                },
                {
                    icon: <PromotePostIcon />,
                    title: 'Promote post',
                },
                {
                    icon: <LiveStudioIcon />,
                    title: 'LIVE Studio',
                },
                {
                    icon: <LiveCreatorHubIcon />,
                    title: 'LIVE Creator Hub',
                },
            ],
        },
    },
    {
        icon: <SettingsIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS.slice(1),
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button
                                outlineDarkColor
                                leftIcon={<PlusIcon />}
                                // to={'/feedback'}
                            >
                                Upload
                            </Button>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <div className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log in</Button>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image src={images.avatar} className={cx('user-avt')} alt="Nguyễn Đức Khoa" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;