import classNames from 'classnames/bind';
import { useState, useEffect, useRef, forwardRef } from 'react';

import styles from './VideoCard.module.scss';
import {
    CommentIcon,
    UncollectedIcon,
    LikeSolidIcon,
    MusicIcon,
    MutedIcon,
    ShareSolidIcon,
    UnmutedIcon,
    WhitePlusIcon,
} from '../Icons';
import { Link } from 'react-router-dom';
import Image from '../Image';

const cx = classNames.bind(styles);

function VideoCard({ data, isMuted, setIsMuted }, ref) {
    const [videoProgress, setVideoProgress] = useState(0);

    const handleVideoProgressBar = (e) => {
        const progressBar = e.currentTarget; // Thanh progress bar
        const rect = progressBar.getBoundingClientRect(); // Vị trí và kích thước của thanh progress
        const clickPosition = e.clientX - rect.left; // Tọa độ click so với thanh progress
        const progressBarWidth = rect.width; // Chiều rộng của thanh progress
        ref.current.currentTime = (clickPosition / progressBarWidth) * ref.current.duration;
        console.log(ref.current.currentTime);
    };

    const handleTimeUpdate = () => {
        const current = ref.current.currentTime; // Thời gian hiện tại
        const duration = ref.current.duration; // Tổng thời lượng video
        if (duration) {
            setVideoProgress(Math.floor((current / duration) * 100)); // Tính phần trăm tiến độ
        }
    };

    const handleMuteToggle = () => {
        if (ref.current) {
            const newMutedState = !isMuted; // Toggle mute state
            setIsMuted(newMutedState); // Update the state
            ref.current.muted = newMutedState; // Apply the change to the video
        }
    };

    const handlePlayPauseToggle = () => {
        if (ref.current) {
            if (ref.current.paused) {
                ref.current.play(); // Phát video nếu đang tạm dừng
            } else {
                ref.current.pause(); // Tạm dừng video nếu đang phát
            }
        }
    };

    useEffect(() => {
        const currentRef = ref.current; // Gắn ref vào biến cục bộ
        if (currentRef) {
            currentRef.addEventListener('timeupdate', handleTimeUpdate);
        }

        // Cleanup
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('media-card-container')}>
                    <div className={cx('video-player-container')}>
                        <div className={cx('video-card')} onClick={handlePlayPauseToggle}>
                            <video muted={isMuted} loop src={data.video} ref={ref}></video>
                        </div>
                        <div className={cx('media-card-top')}>
                            <div className={cx('media-controls-top')}>
                                <div className={cx('div-flex-center')}>
                                    <div className={cx('audio-control-container')}>
                                        <div className={cx('mute-icon')} onClick={handleMuteToggle}>
                                            {isMuted ? <MutedIcon /> : <UnmutedIcon />}
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('div-flex-center')}></div>
                            </div>
                        </div>
                        <div className={cx('media-card-bottom')}>
                            <div className={cx('author-wrapper')}>{data.uploader.username}</div>
                            <div className={cx('desc-wrapper')}>
                                <div className={cx('multiline-text-container')}>
                                    <div className={cx('multiline-text')}>
                                        <h1 className={cx('h1-container')}>
                                            <span className={cx('span-text')}>{data.caption}</span>
                                            {data.tags.map((item, index) => {
                                                return (
                                                    <strong key={index} className={cx('tag')}>
                                                        #{item}
                                                    </strong>
                                                );
                                            })}
                                        </h1>
                                    </div>
                                    {/* <button className={cx('expand-btn')}>more</button> */}
                                </div>
                            </div>
                            <div className={cx('inline-music')}>
                                <h4 className={cx('video-music')}>
                                    <Link to="" className={cx('music-link')}>
                                        <MusicIcon className={cx('music-icon')} />
                                        <span className={cx('music-name')}>{data.music}</span>
                                    </Link>
                                </h4>
                            </div>
                        </div>
                        <div className={cx('video-progress-container')}>
                            <p className={cx('time-display-text')}></p>
                            <div className={cx('progress-bar')} onClick={handleVideoProgressBar}>
                                <div className={cx('scrub-head')} style={{ left: `${videoProgress}%` }}></div>
                                <div className={cx('progress-bar-container')}>
                                    <div
                                        className={cx('progress-bar-elapsed')}
                                        style={{ transform: `scaleX(${videoProgress / 100})` }}
                                    ></div>
                                    <div className={cx('progress-bar-bounds')}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('action-bar-wrapper')}>
                    <div className={cx('action-bar-container')}>
                        <div className={cx('avatar-container')}>
                            <Link to="/profile" className={cx('avatar-link')}>
                                <Image src={data.uploader.profilePhoto} className={cx('avatar-author')} />
                                {/* < */}
                            </Link>
                            <button className={cx('follow-btn')}>
                                <div className={cx('btn-content')}>
                                    <WhitePlusIcon />
                                </div>
                            </button>
                        </div>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('span-icon-wrapper')}>
                                <LikeSolidIcon />
                            </span>
                            <strong className={cx('strong-text')}>{data.likes.length}</strong>
                        </button>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('span-icon-wrapper')}>
                                <CommentIcon />
                            </span>
                            <strong className={cx('strong-text')}>{data.totalComments}</strong>
                        </button>
                        <button className={cx('btn-action-item')}>
                            <span className={cx('span-icon-wrapper')}>
                                <UncollectedIcon />
                            </span>
                            <strong className={cx('strong-text')}>{data.favourites}</strong>
                        </button>
                        <div className={cx('share-btn')}>
                            <button className={cx('btn-action-item')}>
                                <span className={cx('span-icon-wrapper')}>
                                    <ShareSolidIcon />
                                </span>
                                <strong className={cx('strong-text')}>{data.shares}</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(VideoCard);
