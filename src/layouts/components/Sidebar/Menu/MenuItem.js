import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon, avt }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive && activeIcon })} to={to}>
            {avt ? <span className={cx('avatar-container')}>{avt}</span> : <span className={cx('icon')}>{icon}</span>}
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
    avt: PropTypes.node,
};

export default MenuItem;
