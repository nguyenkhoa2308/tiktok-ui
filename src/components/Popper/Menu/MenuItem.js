import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, isSelected, isDarkModeOption, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={classes}
            leftIcon={
                isDarkModeOption ? (
                    <span className={cx('menu-icon')}>{isSelected ? <FontAwesomeIcon icon={faCheck} /> : null}</span>
                ) : (
                    data.icon && <span className={cx('menu-icon')}>{data.icon}</span>
                )
            }
            to={data.to}
            onClick={onClick}
        >
            <span className={cx('menu-item--title')}>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
