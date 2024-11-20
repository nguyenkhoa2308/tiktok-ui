import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState(src || customFallBack);

    useEffect(() => {
        setFallBack(src || customFallBack);
    }, [src, customFallBack]);

    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
