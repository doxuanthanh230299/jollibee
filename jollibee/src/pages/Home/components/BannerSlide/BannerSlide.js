import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import classNames from 'classnames/bind';
import styles from './BannerSlide.module.scss';
import bannerSlideImages from '~/assets/img/BannerSlide';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const slideImages = [
    {
        url: bannerSlideImages.img1,
        caption: 'Slide 1',
    },
    {
        url: bannerSlideImages.img2,
        caption: 'Slide 2',
    },
    {
        url: bannerSlideImages.img3,
        caption: 'Slide 3',
    },
];

const indicators = () => <div className="indicator"></div>;

function BannerSlide() {
    return (
        <div className={cx('wrapper')}>
            <Slide canSwipe={false} indicators={indicators} duration={2000} transitionDuration={500} arrows={false}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div>
                            <img className={cx('slideImage')} src={slideImage.url} alt={slideImage.caption} />
                        </div>
                    </div>
                ))}
            </Slide>
            <Link className={cx('order-btn')} to="/menu">
                Đặt Hàng
            </Link>
        </div>
    );
}

export default BannerSlide;
