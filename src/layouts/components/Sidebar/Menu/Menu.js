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
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ user }) {
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
                icon={user ? <FollowingIcon /> : <UserGroupIcon />}
                activeIcon={user ? <FollowingActiveIcon /> : <UserGroupActiveIcon />}
            />
            {user && (
                <MenuItem
                    to={config.routes.friends}
                    title="Friends"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
            )}
            <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            {user && <MenuItem to={config.routes.messages} title="Messages" icon={<MessageIcon />} activeIcon={null} />}
            <MenuItem
                to={user ? `/@${user.username}` : null}
                title="Profile"
                icon={<ProfileIcon width="2.4rem" height="2.4rem" />}
                avt={user ? <img className={cx('img-avatar')} src={user.profilePhoto} alt="avt" /> : null}
                activeIcon={null}
            />
        </nav>
    );
}

Menu.propTypes = {
    user: PropTypes.object,
};

export default Menu;
