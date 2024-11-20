import classNames from 'classnames/bind';
import React, { useRef, useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import { FavoritesIcon, LikedIcon, RepostsIcon, VideosIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const TAB_MENU = [
    {
        title: 'Videos',
        icon: <VideosIcon />,
    },
    {
        title: 'Reposts',
        icon: <RepostsIcon />,
    },
    {
        title: 'Favorites',
        icon: <FavoritesIcon />,
    },
    {
        title: 'Liked',
        icon: <LikedIcon />,
    },
];
function TabButtons({ activeTab, setActiveTab }) {
    const tabsRef = useRef([]); // Lưu tham chiếu đến tất cả các tab
    const [lineStyle, setLineStyle] = useState({});

    useEffect(() => {
        if (tabsRef.current[0]) {
            const firstTab = tabsRef.current[0];
            const { width, left } = firstTab.getBoundingClientRect();
            const containerLeft = tabsRef.current[0].parentNode.getBoundingClientRect().left;
            setLineStyle({
                width: `${width}px`,
                transform: `translateX(${left - containerLeft}px)`,
            });
        }
    }, []); // Chỉ chạy khi component được mount

    const handleMouseEnter = (index) => {
        if (tabsRef.current[index]) {
            const hoveredTab = tabsRef.current[index];
            const { width, left } = hoveredTab.getBoundingClientRect();
            const containerLeft = tabsRef.current[0].parentNode.getBoundingClientRect().left;
            setLineStyle({
                width: `${width}px`,
                transform: `translateX(${left - containerLeft}px)`,
            });
        }
    };

    const handleMouseLeave = () => {
        if (tabsRef.current[activeTab]) {
            const activeTabElement = tabsRef.current[activeTab];
            const { width, left } = activeTabElement.getBoundingClientRect();
            const containerLeft = tabsRef.current[0].parentNode.getBoundingClientRect().left;
            setLineStyle({
                width: `${width}px`,
                transform: `translateX(${left - containerLeft}px)`,
            });
        }
    };

    return (
        <div className={cx('tab-header')}>
            {TAB_MENU.map((item, index) => {
                return (
                    <div
                        key={index}
                        ref={(el) => (tabsRef.current[index] = el)} // Gán tham chiếu cho từng tab
                        className={cx('tab-item', { active: index === activeTab })}
                        onClick={() => setActiveTab(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className={cx('icon')}>{item.icon}</span>
                        {item.title}
                    </div>
                );
            })}
            <div className={cx('bottom-line')} style={lineStyle}></div>
        </div>
    );
}

export default TabButtons;
