import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import {
    HomeIcon,
    HomeActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    MessageIcon,
    ProfileIcon,
} from '~/components/Icons';
import config from '~/config';
import images from '~/assets/images';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ currentUser }) {
    return (
        <nav className={cx('menu-container')}>
            <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
                to={config.routes.explore}
                title="Explore"
                icon={<ExploreIcon />}
                activeIcon={<ExploreActiveIcon />}
            />
            <MenuItem
                to={config.routes.following}
                title="Following"
                icon={currentUser ? <FollowingIcon /> : <UserGroupIcon />}
                activeIcon={currentUser ? <FollowingActiveIcon /> : <UserGroupActiveIcon />}
            />
            {currentUser && (
                <MenuItem
                    to={config.routes.friends}
                    title="Friends"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
            )}
            <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            {currentUser && (
                <MenuItem to={config.routes.messages} title="Messages" icon={<MessageIcon />} activeIcon={null} />
            )}
            <MenuItem
                to={null}
                title="Profile"
                icon={<ProfileIcon width="2.4rem" height="2.4rem" />}
                avt={currentUser ? <img className={cx('img-avatar')} src={images.avatar} alt="avt" /> : null}
                activeIcon={null}
            />
        </nav>
    );
}

Menu.propTypes = {
    currentUser: PropTypes.bool.isRequired,
};

export default Menu;
