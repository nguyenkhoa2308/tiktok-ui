import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import VideoCard from '~/components/VideoCard/VideoCard';

const cx = classNames.bind(styles);

function Home() {
    const [videos, setVideos] = useState([]);
    const [shuffledVideos, setShuffledVideos] = useState([]);
    const [isMuted, setIsMuted] = useState(true);
    //JSON.parse(localStorage.getItem('isMuted'))
    const vidRefs = useRef([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/videos');
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const shuffled = [...videos].sort(() => Math.random() - 0.5);
        setShuffledVideos(shuffled);
    }, [videos]);

    useEffect(() => {
        // Lưu trạng thái mute vào localStorage mỗi khi thay đổi
        localStorage.setItem('isMuted', JSON.stringify(isMuted));

        // Cập nhật trạng thái mute cho tất cả video
        vidRefs.current.forEach((videoRef) => {
            if (videoRef.current) {
                videoRef.current.muted = isMuted;
            }
        });
    }, [isMuted]); // Chạy khi trạng thái isMuted thay đổi

    useEffect(() => {
        const vid = vidRefs.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        video.currentTime = 0; // Reset video time
                        setTimeout(() => {
                            video.play();
                        }, 100);
                    } else {
                        video.pause(); // Pause video when it leaves viewport
                    }
                });
            },
            {
                threshold: 1,
            },
        );

        // Observe all video elements
        vid.forEach((video) => {
            if (video.current && !video.current.loading) observer.observe(video.current);
        });

        return () => {
            // Cleanup observer
            vid.forEach((video) => {
                if (video.current) observer.unobserve(video.current);
            });
        };
    }, [shuffledVideos]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('video-feed')}>
                    {shuffledVideos.map((item, index) => {
                        // Initialize ref if it doesn't exist
                        if (!vidRefs.current[index]) {
                            vidRefs.current[index] = React.createRef();
                        }
                        return (
                            <VideoCard
                                key={index}
                                data={item}
                                isMuted={isMuted}
                                setIsMuted={setIsMuted}
                                ref={vidRefs.current[index]}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={'bottom-container'}></div>
        </div>
    );
}

export default Home;
